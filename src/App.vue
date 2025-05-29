<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import TaskFilter from './components/TaskFilter.vue';
import TaskKanban from './components/TaskKanban.vue';
import { getTasks, addTask as fbAddTask, updateTask as fbUpdateTask, updateTaskStatus as fbUpdateTaskStatus, deleteTask as fbDeleteTask } from './firebase/taskService';
import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { initializeTasksCollection } from './firebase/initializeFirestore';

// Estado das tarefas
const tasks = ref([]);
const filter = ref('all');
const showModal = ref(false);
const showFilters = ref(false);
const viewMode = ref('list'); // 'list' ou 'kanban'
const isLoading = ref(true);
const error = ref(null);
const isAuthenticated = ref(false);

// Monitorar o estado de autenticação e carregar tarefas quando autenticado
onMounted(() => {
  isLoading.value = true;
  
  // Observar mudanças no estado de autenticação
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Usuário autenticado
      isAuthenticated.value = true;
      console.log('Usuário autenticado:', user.uid);
      
      try {
        // Inicializar a coleção de tarefas (cria uma tarefa de exemplo se for a primeira vez)
        await initializeTasksCollection();
        
        // Carregar tarefas do Firebase
        tasks.value = await getTasks();
        isLoading.value = false;
      } catch (err) {
        console.error('Erro ao carregar tarefas:', err);
        error.value = 'Erro ao carregar tarefas. Por favor, tente novamente.';
        isLoading.value = false;
      }
    } else {
      // Usuário não autenticado
      isAuthenticated.value = false;
      isLoading.value = false;
      console.log('Usuário não autenticado');
    }
  });
});

// Adicionar nova tarefa
const addTask = async (task) => {
  try {
    console.log('Iniciando adição de tarefa:', task);
    isLoading.value = true;
    
    // Verificar se o usuário está autenticado
    if (!auth.currentUser) {
      console.error('Usuário não autenticado ao tentar adicionar tarefa');
      error.value = 'Você precisa estar autenticado para adicionar tarefas.';
      isLoading.value = false;
      return;
    }
    
    console.log('Usuário autenticado:', auth.currentUser.uid);
    
    const newTask = {
      title: task.title,
      description: task.description || '',
      dueDate: task.dueDate,
      priority: task.priority || 'média',
      status: 'pendente'
    };
    
    console.log('Enviando tarefa para o Firebase:', newTask);
    
    // Adicionar ao Firebase
    const docRef = await fbAddTask(newTask);
    console.log('Tarefa adicionada com sucesso, ID:', docRef.id);
    
    // Atualizar o estado local
    const taskWithId = {
      id: docRef.id,
      ...newTask,
      createdAt: new Date().toISOString(),
      userId: auth.currentUser.uid
    };
    
    console.log('Adicionando tarefa ao estado local:', taskWithId);
    tasks.value.unshift(taskWithId);
    
    // Mostrar mensagem de sucesso temporária
    error.value = null;
    isLoading.value = false;
    alert('Tarefa adicionada com sucesso!');
  } catch (err) {
    console.error('Erro ao adicionar tarefa:', err);
    console.error('Detalhes do erro:', err.code, err.message);
    error.value = `Erro ao adicionar tarefa: ${err.message}. Por favor, tente novamente.`;
    isLoading.value = false;
  }
};

// Remover tarefa
const removeTask = async (id) => {
  try {
    isLoading.value = true;
    
    // Remover do Firebase
    await fbDeleteTask(id);
    
    // Atualizar o estado local
    tasks.value = tasks.value.filter(task => task.id !== id);
    
    isLoading.value = false;
  } catch (err) {
    console.error('Erro ao remover tarefa:', err);
    error.value = 'Erro ao remover tarefa. Por favor, tente novamente.';
    isLoading.value = false;
  }
};

// Atualizar status da tarefa
const updateTaskStatus = async (id, status) => {
  try {
    isLoading.value = true;
    
    // Atualizar no Firebase
    await fbUpdateTaskStatus(id, status);
    
    // Atualizar o estado local
    const task = tasks.value.find(task => task.id === id);
    if (task) {
      task.status = status;
    }
    
    isLoading.value = false;
  } catch (err) {
    console.error('Erro ao atualizar status da tarefa:', err);
    error.value = 'Erro ao atualizar status. Por favor, tente novamente.';
    isLoading.value = false;
  }
};

// Editar tarefa
const editTask = async (updatedTask) => {
  try {
    isLoading.value = true;
    
    // Preparar dados para atualização
    const { id, ...taskData } = updatedTask;
    
    // Atualizar no Firebase
    await fbUpdateTask(id, taskData);
    
    // Atualizar o estado local
    const index = tasks.value.findIndex(task => task.id === id);
    if (index !== -1) {
      tasks.value[index] = { ...tasks.value[index], ...taskData };
    }
    
    isLoading.value = false;
  } catch (err) {
    console.error('Erro ao editar tarefa:', err);
    error.value = 'Erro ao editar tarefa. Por favor, tente novamente.';
    isLoading.value = false;
  }
};

// Filtrar tarefas
const filteredTasks = computed(() => {
  if (filter.value === 'all') {
    return tasks.value;
  }
  return tasks.value.filter(task => task.status === filter.value);
});

// Verificar tarefas em atraso
const checkOverdueTasks = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  tasks.value.forEach(task => {
    if (task.status !== 'concluida') {
      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);
      
      if (dueDate < today) {
        task.status = 'atrasada';
      }
    }
  });
};

// Verificar tarefas em atraso a cada minuto
setInterval(checkOverdueTasks, 60000);
// Verificar inicialmente
checkOverdueTasks();

// Estatísticas das tarefas
const taskStats = computed(() => {
  const total = tasks.value.length;
  const completed = tasks.value.filter(task => task.status === 'concluida').length;
  const pending = tasks.value.filter(task => task.status === 'pendente').length;
  const overdue = tasks.value.filter(task => task.status === 'atrasada').length;
  const inProgress = tasks.value.filter(task => task.status === 'em_andamento').length;
  
  return { total, completed, pending, overdue, inProgress };
});
</script>

<template>
  <div class="todo-app">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="50" height="50" />
      <h1>Gerenciador de Tarefas</h1>
    </header>

    <main>
      <!-- Mensagem de erro -->
      <div v-if="error" class="error-message">
        {{ error }}
        <button @click="error = null" class="close-error">×</button>
      </div>
      
      <!-- Indicador de carregamento -->
      <div v-if="isLoading" class="loading-indicator">
        <div class="spinner"></div>
        <span>Carregando...</span>
      </div>
      
      <!-- Mensagem de autenticação -->
      <div v-if="!isAuthenticated && !isLoading" class="auth-message">
        <div class="auth-icon">🔒</div>
        <div class="auth-text">
          <h3>Autenticando...</h3>
          <p>Estamos configurando seu acesso seguro ao sistema. Aguarde um momento.</p>
        </div>
      </div>
      
      <div class="stats-container">
        <div class="stat-box">
          <span class="stat-value">{{ taskStats.total }}</span>
          <span class="stat-label">Total</span>
        </div>
        <div class="stat-box completed">
          <span class="stat-value">{{ taskStats.completed }}</span>
          <span class="stat-label">Concluídas</span>
        </div>
        <div class="stat-box pending">
          <span class="stat-value">{{ taskStats.pending }}</span>
          <span class="stat-label">Pendentes</span>
        </div>
        <div class="stat-box overdue">
          <span class="stat-value">{{ taskStats.overdue }}</span>
          <span class="stat-label">Atrasadas</span>
        </div>
        <div class="stat-box in-progress">
          <span class="stat-value">{{ taskStats.inProgress }}</span>
          <span class="stat-label">Em Andamento</span>
        </div>
      </div>
      
      <!-- Botões de ação (visíveis apenas em mobile) -->
      <div class="mobile-actions">
        <button @click="showModal = true" class="action-button add-button">
          <span class="icon">+</span> Nova Tarefa
        </button>
        <button @click="showFilters = !showFilters" class="action-button filter-button">
          <span class="icon">🔍</span> {{ showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros' }}
        </button>
      </div>
      
      <!-- Alternar entre visualizações -->
      <div class="view-toggle">
        <button 
          @click="viewMode = 'list'" 
          class="toggle-btn" 
          :class="{ active: viewMode === 'list' }"
        >
          <span class="icon">📜</span> Lista
        </button>
        <button 
          @click="viewMode = 'kanban'" 
          class="toggle-btn" 
          :class="{ active: viewMode === 'kanban' }"
        >
          <span class="icon">📋</span> Kanban
        </button>
      </div>
      
      <!-- Formulário em desktop / Modal em mobile -->
      <div class="form-container" :class="{ 'is-modal': showModal }">
        <div v-if="showModal" class="modal-overlay" @click="showModal = false"></div>
        <div class="modal-content" :class="{ 'show': showModal }">
          <div v-if="showModal" class="modal-header">
            <h2>Nova Tarefa</h2>
            <button @click="showModal = false" class="close-button">×</button>
          </div>
          <TaskForm @add-task="(task) => { addTask(task); showModal = false; }" />
        </div>
      </div>
      
      <div class="task-container">
        <div class="filter-container" :class="{ 'show-filters': showFilters }">
          <TaskFilter :filter="filter" @set-filter="filter = $event; showFilters = false" />
        </div>
        
        <!-- Visualização em Lista -->
        <TaskList 
          v-if="viewMode === 'list'"
          :tasks="filteredTasks" 
          @remove-task="removeTask" 
          @update-status="updateTaskStatus" 
          @edit-task="editTask" 
        />
        
        <!-- Visualização em Kanban -->
        <TaskKanban 
          v-else
          :tasks="tasks" 
          @remove-task="removeTask" 
          @update-status="updateTaskStatus" 
          @edit-task="editTask" 
        />
      </div>
    </main>
  </div>
</template>

<style>
@import './assets/main.css';

:root {
  --primary-color: #6366f1;
  --primary-hover: #4f46e5;
  --secondary-color: #f9fafb;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --bg-primary: #ffffff;
  --bg-secondary: #f1f5f9;
  --border-color: #e2e8f0;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  
  /* Status colors */
  --status-completed: #10b981;
  --status-pending: #f59e0b;
  --status-overdue: #ef4444;
  --status-progress: #3b82f6;
}

body {
  background-color: #f8fafc;
  color: var(--text-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.todo-app {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5rem;
  width: 100%;
  box-sizing: border-box;
}

header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

header h1 {
  margin-left: 1rem;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.75rem;
}

.stats-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 12px;
}

.stat-box {
  flex: 1;
  min-width: 120px;
  background-color: var(--bg-primary);
  border-radius: var(--radius-md);
  padding: 1.25rem 1rem;
  text-align: center;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid var(--border-color);
}

.stat-box:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.stat-value {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.completed {
  background-color: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
}

.completed .stat-value {
  color: var(--status-completed);
}

.pending {
  background-color: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.3);
}

.pending .stat-value {
  color: var(--status-pending);
}

.overdue {
  background-color: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
}

.overdue .stat-value {
  color: var(--status-overdue);
}

.in-progress {
  background-color: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.3);
}

.in-progress .stat-value {
  color: var(--status-progress);
}

.task-container {
  background-color: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 1.5rem;
  border: 1px solid var(--border-color);
}

/* Modal e overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  z-index: 10;
}

.modal-content {
  position: relative;
  z-index: 11;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-secondary);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.modal-header h2 {
  margin: 0;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1.25rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
}

.close-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--text-primary);
}

/* Botões de ação mobile */
.mobile-actions {
  display: none;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

/* Alternar entre visualizações */
.view-toggle {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
}

.toggle-btn {
  padding: 0.6rem 1.25rem;
  border-radius: var(--radius-full, 9999px);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  box-shadow: var(--shadow-sm);
}

.toggle-btn:hover {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.toggle-btn.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.toggle-btn .icon {
  margin-right: 0.4rem;
}

/* Indicador de carregamento */
.loading-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-weight: 500;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Mensagem de erro */
.error-message {
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--status-overdue);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.close-error {
  background: none;
  border: none;
  color: var(--status-overdue);
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
}

/* Mensagem de autenticação */
.auth-message {
  display: flex;
  align-items: center;
  background-color: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.auth-icon {
  font-size: 2rem;
  margin-right: 1rem;
  color: var(--primary-color);
}

.auth-text h3 {
  margin: 0 0 0.5rem 0;
  color: var(--primary-color);
  font-weight: 600;
}

.auth-text p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
}

.action-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem;
  border-radius: var(--radius-md);
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--shadow-sm);
}

.add-button {
  background-color: var(--primary-color);
  color: white;
}

.add-button:hover {
  background-color: var(--primary-hover);
  box-shadow: var(--shadow-md);
}

.filter-button {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.filter-button:hover {
  background-color: var(--bg-secondary);
  box-shadow: var(--shadow-md);
}

.icon {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

/* Container de filtros */
.filter-container {
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .todo-app {
    padding: 0.75rem;
  }

  header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  header h1 {
    margin-left: 0;
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }

  /* Estatísticas menores em mobile */
  .stats-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  
  .stat-box {
    min-width: unset;
    padding: 0.5rem 0.25rem;
  }

  .stat-value {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }

  .stat-label {
    font-size: 0.7rem;
  }

  .task-container {
    padding: 1rem;
  }
  
  /* Mostrar botões de ação em mobile */
  .mobile-actions {
    display: flex;
  }
  
  /* Esconder formulário em mobile (só mostrar como modal) */
  .form-container {
    display: none;
  }
  
  .form-container.is-modal {
    display: block;
  }
  
  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    width: 90%;
    max-width: 500px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }
  
  .modal-content.show {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);
  }
  
  /* Esconder filtros por padrão */
  .filter-container {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s;
  }
  
  .filter-container.show-filters {
    max-height: 200px;
    opacity: 1;
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-box {
    padding: 0.4rem 0.2rem;
  }
  
  .stat-value {
    font-size: 1rem;
  }
  
  .stat-label {
    font-size: 0.65rem;
  }
}
</style>
