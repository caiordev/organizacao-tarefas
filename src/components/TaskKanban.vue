<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  tasks: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['remove-task', 'update-status', 'edit-task']);

// Agrupar tarefas por status
const tasksByStatus = computed(() => {
  const grouped = {
    pendente: [],
    em_andamento: [],
    concluida: [],
    atrasada: []
  };
  
  props.tasks.forEach(task => {
    if (grouped[task.status]) {
      grouped[task.status].push(task);
    }
  });
  
  return grouped;
});

// Status labels para exibição
const statusLabels = {
  atrasada: 'Atrasadas',
  pendente: 'Pendentes',
  em_andamento: 'Em Andamento',
  concluida: 'Concluídas'
};

// Status colors para estilização
const statusColors = {
  pendente: 'var(--status-pending)',
  em_andamento: 'var(--status-progress)',
  concluida: 'var(--status-completed)',
  atrasada: 'var(--status-overdue)'
};

// Formatar data
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
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

// Arrastar e soltar
const draggedTask = ref(null);
const dragOverColumn = ref(null);

const handleDragStart = (task) => {
  draggedTask.value = task;
};

const handleDragOver = (event, status) => {
  event.preventDefault();
  dragOverColumn.value = status;
};

const handleDrop = (event, newStatus) => {
  event.preventDefault();
  if (draggedTask.value && draggedTask.value.status !== newStatus) {
    emit('update-status', draggedTask.value.id, newStatus);
  }
  draggedTask.value = null;
  dragOverColumn.value = null;
};

const handleDragEnd = () => {
  draggedTask.value = null;
  dragOverColumn.value = null;
};
</script>

<template>
  <div class="kanban-container">
    <div 
      v-for="(status, statusKey) in statusLabels" 
      :key="statusKey"
      class="kanban-column"
      :class="{ 'drag-over': dragOverColumn === statusKey }"
      :style="{ '--column-color': statusColors[statusKey] }"
      @dragover="handleDragOver($event, statusKey)"
      @drop="handleDrop($event, statusKey)"
    >
      <div class="column-header" :style="{ backgroundColor: `${statusColors[statusKey]}20` }">
        <h3>{{ status }}</h3>
        <span class="task-count">{{ tasksByStatus[statusKey].length }}</span>
      </div>
      
      <div class="column-content">
        <div 
          v-if="tasksByStatus[statusKey].length === 0" 
          class="empty-column"
        >
          Nenhuma tarefa
        </div>
        
        <div 
          v-for="task in tasksByStatus[statusKey]" 
          :key="task.id"
          class="kanban-card"
          draggable="true"
          @dragstart="handleDragStart(task)"
          @dragend="handleDragEnd"
        >
          <div class="card-header">
            <h4>{{ task.title }}</h4>
            <span class="task-priority" :class="getPriorityClass(task.priority)">
              {{ task.priority.charAt(0).toUpperCase() + task.priority.slice(1) }}
            </span>
          </div>
          
          <p v-if="task.description" class="card-description">
            {{ task.description.length > 100 ? task.description.substring(0, 100) + '...' : task.description }}
          </p>
          
          <div class="card-meta">
            <span class="due-date">Vencimento: {{ formatDate(task.dueDate) }}</span>
          </div>
          
          <div class="card-actions">
            <button @click="emit('edit-task', task)" class="btn-icon edit-icon" title="Editar">
              <span>✏️</span>
            </button>
            <button @click="emit('remove-task', task.id)" class="btn-icon delete-icon" title="Excluir">
              <span>🗑️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kanban-container {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  min-height: 60vh;
}

.kanban-column {
  flex: 1;
  min-width: 280px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-color);
  transition: all 0.2s;
  box-shadow: var(--shadow-sm);
}

.kanban-column.drag-over {
  box-shadow: 0 0 0 2px var(--column-color);
}

.column-header {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-md) var(--radius-md) 0 0;
}

.column-header h3 {
  margin: 0;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}

.task-count {
  background-color: var(--column-color);
  color: white;
  border-radius: 9999px;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
  font-weight: 600;
}

.column-content {
  padding: 1rem;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.empty-column {
  text-align: center;
  padding: 2rem 0;
  color: var(--text-secondary);
  font-style: italic;
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: var(--radius-sm);
  border: 1px dashed var(--border-color);
}

.kanban-card {
  background-color: var(--bg-primary);
  border-radius: var(--radius-md);
  padding: 1rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  cursor: grab;
  transition: all 0.2s;
}

.kanban-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.kanban-card:active {
  cursor: grabbing;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.card-header h4 {
  margin: 0;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.task-priority {
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.7rem;
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

.card-description {
  margin: 0.5rem 0;
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.4;
}

.card-meta {
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.btn-icon:hover {
  background-color: var(--bg-secondary);
}

@media (max-width: 768px) {
  .kanban-container {
    flex-direction: column;
    overflow-x: visible;
  }
  
  .kanban-column {
    min-width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
