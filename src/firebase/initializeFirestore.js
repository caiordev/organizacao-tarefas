import { db, auth } from './config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

/**
 * Inicializa a coleção de tarefas no Firestore com uma tarefa de exemplo
 * Esta função deve ser chamada após a autenticação do usuário
 */
export const initializeTasksCollection = async () => {
  try {
    // Verificar se o usuário está autenticado
    if (!auth.currentUser) {
      console.log('Usuário não autenticado. Não é possível inicializar a coleção.');
      return;
    }

    // Referência à coleção de tarefas
    const tasksCollection = collection(db, 'tasks');
    
    // Criar uma tarefa de exemplo
    const exampleTask = {
      title: 'Bem-vindo ao Gerenciador de Tarefas',
      description: 'Este é um exemplo de tarefa. Você pode adicionar, editar, excluir e filtrar suas tarefas. Use a visualização Kanban para arrastar e soltar tarefas entre diferentes status.',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 dias a partir de hoje
      priority: 'média',
      status: 'pendente',
      createdAt: serverTimestamp(),
      userId: auth.currentUser.uid
    };
    
    // Adicionar a tarefa de exemplo ao Firestore
    await addDoc(tasksCollection, exampleTask);
    console.log('Coleção de tarefas inicializada com sucesso!');
    
  } catch (error) {
    console.error('Erro ao inicializar a coleção de tarefas:', error);
  }
};
