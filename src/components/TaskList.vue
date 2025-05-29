<script setup>
import { ref } from 'vue';

const props = defineProps({
  tasks: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['remove-task', 'update-status', 'edit-task']);

// Estado para edição de tarefa
const editingTask = ref(null);
const editForm = ref({
  title: '',
  description: '',
  dueDate: '',
  priority: ''
});

// Status disponíveis
const statusOptions = [
  { value: 'pendente', label: 'Pendente' },
  { value: 'em_andamento', label: 'Em Andamento' },
  { value: 'concluida', label: 'Concluída' },
  { value: 'atrasada', label: 'Atrasada' }
];

// Prioridades disponíveis
const priorities = ['baixa', 'média', 'alta', 'urgente'];

// Formatar data
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
};

// Iniciar edição de tarefa
const startEdit = (task) => {
  editingTask.value = task.id;
  editForm.value = {
    id: task.id,
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    priority: task.priority
  };
};

// Salvar edição
const saveEdit = () => {
  if (!editForm.value.title.trim()) {
    alert('Por favor, preencha o título da tarefa');
    return;
  }
  
  emit('edit-task', editForm.value);
  editingTask.value = null;
};

// Cancelar edição
const cancelEdit = () => {
  editingTask.value = null;
};

// Obter classe CSS baseada no status
const getStatusClass = (status) => {
  switch (status) {
    case 'concluida': return 'status-completed';
    case 'pendente': return 'status-pending';
    case 'atrasada': return 'status-overdue';
    case 'em_andamento': return 'status-progress';
    default: return '';
  }
};

// Obter classe CSS baseada na prioridade
const getPriorityClass = (priority) => {
  switch (priority) {
    case 'baixa': return 'priority-low';
    case 'média': return 'priority-medium';
    case 'alta': return 'priority-high';
    case 'urgente': return 'priority-urgent';
    default: return '';
  }
};
</script>

<template>
  <div class="task-list">
    <div v-if="tasks.length === 0" class="no-tasks">
      <p>Nenhuma tarefa encontrada. Adicione uma nova tarefa para começar!</p>
    </div>
    
    <div v-else class="tasks-container">
      <div 
        v-for="task in tasks" 
        :key="task.id" 
        class="task-item"
        :class="getStatusClass(task.status)"
      >
        <!-- Modo de visualização -->
        <div v-if="editingTask !== task.id" class="task-view">
          <div class="task-header">
            <h3>{{ task.title }}</h3>
            <div class="task-badges">
              <span class="task-priority" :class="getPriorityClass(task.priority)">
                {{ task.priority.charAt(0).toUpperCase() + task.priority.slice(1) }}
              </span>
              <span class="task-status" :class="getStatusClass(task.status)">
                {{ statusOptions.find(s => s.value === task.status)?.label }}
              </span>
            </div>
          </div>
          
          <p v-if="task.description" class="task-description">{{ task.description }}</p>
          
          <div class="task-meta">
            <span class="task-date">
              <strong>Vencimento:</strong> {{ formatDate(task.dueDate) }}
            </span>
          </div>
          
          <div class="task-actions">
            <select 
              :value="task.status" 
              @change="emit('update-status', task.id, $event.target.value)"
              class="status-select"
            >
              <option 
                v-for="option in statusOptions" 
                :key="option.value" 
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
            
            <div class="action-buttons">
              <button @click="startEdit(task)" class="btn-edit">Editar</button>
              <button @click="emit('remove-task', task.id)" class="btn-delete">Excluir</button>
            </div>
          </div>
        </div>
        
        <!-- Modo de edição -->
        <div v-else class="task-edit">
          <div class="form-group">
            <label for="edit-title">Título*</label>
            <input 
              type="text" 
              id="edit-title" 
              v-model="editForm.title" 
              required
            >
          </div>
          
          <div class="form-group">
            <label for="edit-description">Descrição</label>
            <textarea 
              id="edit-description" 
              v-model="editForm.description" 
              rows="3"
            ></textarea>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="edit-dueDate">Data de Vencimento*</label>
              <input 
                type="date" 
                id="edit-dueDate" 
                v-model="editForm.dueDate" 
                required
              >
            </div>
            
            <div class="form-group">
              <label for="edit-priority">Prioridade</label>
              <select id="edit-priority" v-model="editForm.priority">
                <option v-for="priority in priorities" :key="priority" :value="priority">
                  {{ priority.charAt(0).toUpperCase() + priority.slice(1) }}
                </option>
              </select>
            </div>
          </div>
          
          <div class="edit-actions">
            <button @click="saveEdit" class="btn-save">Salvar</button>
            <button @click="cancelEdit" class="btn-cancel">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.task-list {
  margin-top: 1rem;
}

.no-tasks {
  text-align: center;
  padding: 2rem;
  color: #718096;
  background-color: #f7fafc;
  border-radius: 8px;
  border: 1px dashed #cbd5e0;
}

.tasks-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.task-item {
  background-color: var(--bg-primary);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--border-color);
  transition: all 0.2s;
  margin-bottom: 1rem;
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.task-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.task-header h3 {
  margin: 0;
  color: #2d3748;
  font-size: 1.25rem;
  margin-right: 1rem;
}

.task-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.task-priority,
.task-status {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.priority-low {
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--status-completed);
}

.priority-medium {
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--status-progress);
}

.priority-high {
  background-color: rgba(245, 158, 11, 0.1);
  color: var(--status-pending);
}

.priority-urgent {
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--status-overdue);
}

.status-completed {
  border-left-color: var(--status-completed);
}

.status-completed::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 40px 40px 0;
  border-color: transparent var(--status-completed) transparent transparent;
  opacity: 0.2;
}

.status-completed .task-status {
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--status-completed);
}

.status-pending {
  border-left-color: var(--status-pending);
}

.status-pending .task-status {
  background-color: rgba(245, 158, 11, 0.1);
  color: var(--status-pending);
}

.status-overdue {
  border-left-color: var(--status-overdue);
}

.status-overdue::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 40px 40px 0;
  border-color: transparent var(--status-overdue) transparent transparent;
  opacity: 0.2;
}

.status-overdue .task-status {
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--status-overdue);
}

.status-progress {
  border-left-color: var(--status-progress);
}

.status-progress .task-status {
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--status-progress);
}

.task-description {
  margin: 0.5rem 0;
  color: #4a5568;
  white-space: pre-line;
}

.task-meta {
  margin: 0.5rem 0;
  color: #718096;
  font-size: 0.875rem;
}

.task-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.status-select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
  background-color: white;
  font-size: 0.875rem;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.btn-edit,
.btn-delete,
.btn-save,
.btn-cancel {
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
}

.btn-edit {
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--status-progress);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.btn-edit:hover {
  background-color: rgba(59, 130, 246, 0.2);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-delete {
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--status-overdue);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.btn-delete:hover {
  background-color: rgba(239, 68, 68, 0.2);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-save {
  background-color: var(--primary-color);
  color: white;
}

.btn-save:hover {
  background-color: var(--primary-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-cancel {
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}

.btn-cancel:hover {
  background-color: var(--border-color);
  color: var(--text-primary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.task-edit {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  width: 100%;
}

.form-row {
  display: flex;
  gap: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #4a5568;
}

input, textarea, select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
}

.edit-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .task-item {
    padding: 1rem;
  }

  .task-header {
    flex-direction: column;
  }
  
  .task-badges {
    margin-top: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  
  .task-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }

  .status-select {
    width: 100%;
    padding: 0.6rem;
  }
  
  .action-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
  
  .form-row {
    flex-direction: column;
  }

  .btn-edit, .btn-delete, .btn-save, .btn-cancel {
    width: 100%;
    padding: 0.6rem 0;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .task-item {
    padding: 0.75rem;
  }

  .task-header h3 {
    font-size: 1.1rem;
  }

  .task-description {
    font-size: 0.9rem;
  }

  .task-meta {
    font-size: 0.8rem;
  }

  .task-badges {
    flex-wrap: wrap;
  }

  .task-priority, .task-status {
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
  }
}
</style>
