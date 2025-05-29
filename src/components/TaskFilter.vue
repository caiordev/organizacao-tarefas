<script setup>
import { ref } from 'vue';

const props = defineProps({
  filter: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['set-filter']);

const filters = [
  { value: 'all', label: 'Todas' },
  { value: 'pendente', label: 'Pendentes' },
  { value: 'em_andamento', label: 'Em Andamento' },
  { value: 'concluida', label: 'Concluídas' },
  { value: 'atrasada', label: 'Atrasadas' }
];

const setFilter = (value) => {
  emit('set-filter', value);
};
</script>

<template>
  <div class="task-filter">
    <h3>Filtrar Tarefas</h3>
    <div class="filter-buttons">
      <button 
        v-for="filterOption in filters" 
        :key="filterOption.value"
        @click="setFilter(filterOption.value)"
        :class="{ active: filter === filterOption.value }"
        class="filter-btn"
      >
        {{ filterOption.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.task-filter {
  margin-bottom: 1.75rem;
}

h3 {
  margin-top: 0;
  margin-bottom: 1.25rem;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  display: inline-block;
}

h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 3px;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.filter-btn {
  padding: 0.6rem 1.25rem;
  border-radius: var(--radius-full, 9999px);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: var(--shadow-sm);
}

.filter-btn:hover {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.filter-btn.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.filter-btn.active:hover {
  background-color: var(--primary-hover);
}

@media (max-width: 768px) {
  .task-filter {
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }

  .filter-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  
  .filter-btn {
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .filter-buttons {
    grid-template-columns: repeat(2, 1fr);
  }

  .filter-btn {
    padding: 0.4rem 0;
    font-size: 0.75rem;
  }
}
</style>
