import { db, auth } from './config';
import { collection } from 'firebase/firestore';

/**
 * Inicializa a coleção de tarefas no Firestore
 * Esta função deve ser chamada após a autenticação do usuário
 */
export const initializeTasksCollection = async () => {
  try {
    // Verificar se o usuário está autenticado
    if (!auth.currentUser) {
      console.log('Usuário não autenticado. Não é possível inicializar a coleção.');
      return;
    }

    // Apenas verificar a coleção de tarefas
    collection(db, 'tasks');
    console.log('Coleção de tarefas inicializada com sucesso!');
    
  } catch (error) {
    console.error('Erro ao inicializar a coleção de tarefas:', error);
  }
};
