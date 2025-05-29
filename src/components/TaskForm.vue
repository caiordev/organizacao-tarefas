<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-task']);

const newTask = ref({
  title: '',
  description: '',
  dueDate: '',
  priority: 'média'
});

const priorities = ['baixa', 'média', 'alta', 'urgente'];

const addTask = () => {
  if (!newTask.value.title.trim()) {
    alert('Por favor, preencha o título da tarefa');
    return;
  }
  
  if (!newTask.value.dueDate) {
    alert('Por favor, selecione uma data de vencimento');
    return;
  }
  
  emit('add-task', {
    title: newTask.value.title,
    description: newTask.value.description,
    dueDate: newTask.value.dueDate,
    priority: newTask.value.priority
  });
  
  // Limpar o formulário
  newTask.value.title = '';
  newTask.value.description = '';
  newTask.value.dueDate = '';
  newTask.value.priority = 'média';
};

// Definir a data mínima como hoje
const today = new Date().toISOString().split('T')[0];
</script>

<template>
  <div class="task-form">
    <h2 class="desktop-only">Nova Tarefa</h2>
    <form @submit.prevent="addTask">
      <div class="form-group">
        <label for="title">Título*</label>
        <input 
          type="text" 
          id="title" 
          v-model="newTask.title" 
          placeholder="Digite o título da tarefa" 
          required
        >
      </div>
      
      <div class="form-group">
        <label for="description">Descrição</label>
        <textarea 
          id="description" 
          v-model="newTask.description" 
          placeholder="Descreva sua tarefa (opcional)"
          rows="3"
        ></textarea>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="dueDate">Data de Vencimento*</label>
          <input 
            type="date" 
            id="dueDate" 
            v-model="newTask.dueDate" 
            :min="today"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="priority">Prioridade</label>
          <select id="priority" v-model="newTask.priority">
            <option v-for="priority in priorities" :key="priority" :value="priority">
              {{ priority.charAt(0).toUpperCase() + priority.slice(1) }}
            </option>
          </select>
        </div>
      </div>
      
      <button type="submit" class="btn-add">Adicionar Tarefa</button>
    </form>
  </div>
</template>

<style scoped>
.task-form {
  background-color: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
}

h2 {
  margin-top: 0;
  color: var(--text-primary);
  margin-bottom: 1.75rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.75rem;
  font-weight: 600;
  font-size: 1.25rem;
}

.form-group {
  margin-bottom: 1.25rem;
  width: 100%;
}

.form-row {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

input, textarea, select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: all 0.2s;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  box-shadow: var(--shadow-sm);
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}

.btn-add {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--shadow-sm);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-add:hover {
  background-color: var(--primary-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn-add:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .task-form {
    padding: 1rem;
    box-shadow: none;
    margin-bottom: 0;
  }

  .form-row {
    flex-direction: column;
    gap: 0.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  .desktop-only {
    display: none;
  }

  input, textarea, select {
    padding: 0.6rem;
    font-size: 0.95rem;
  }

  .btn-add {
    width: 100%;
    padding: 0.75rem;
  }
}

@media (max-width: 480px) {
  .task-form {
    padding: 0.75rem;
  }

  h2 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  label {
    font-size: 0.9rem;
  }

  input, textarea, select {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}
</style>
