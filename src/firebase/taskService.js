import { db, auth } from './config';
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  updateDoc, 
  doc, 
  getDocs, 
  query, 
  orderBy, 
  serverTimestamp,
  where
} from 'firebase/firestore';

// Referência à coleção de tarefas
const tasksCollection = collection(db, 'tasks');

// Obter todas as tarefas
export const getTasks = async () => {
  try {
    // Verificar se o usuário está autenticado
    if (!auth.currentUser) {
      console.log('Aguardando autenticação...');
      return [];
    }
    
    const userId = auth.currentUser.uid;
    // Usar apenas o filtro por userId sem orderBy para evitar a necessidade de índice composto
    const q = query(
      tasksCollection, 
      where('userId', '==', userId)
    );
    
    const snapshot = await getDocs(q);
    
    // Ordenar os resultados no lado do cliente
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate()?.toISOString() || new Date().toISOString(),
      dueDate: doc.data().dueDate || ''
    })).sort((a, b) => {
      // Ordenar por data de criação decrescente (mais recente primeiro)
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    throw error;
  }
};

// Adicionar uma nova tarefa
export const addTask = async (task) => {
  try {
    console.log('taskService: Iniciando adição de tarefa');
    
    if (!auth.currentUser) {
      console.error('taskService: Usuário não autenticado ao tentar adicionar tarefa');
      throw new Error('Usuário não autenticado');
    }
    
    console.log('taskService: Usuário autenticado:', auth.currentUser.uid);
    
    // Garantir que todos os campos necessários estejam presentes
    const newTask = {
      title: task.title || 'Nova Tarefa',
      description: task.description || '',
      dueDate: task.dueDate || '',
      priority: task.priority || 'baixa',
      status: task.status || 'pendente',
      createdAt: serverTimestamp(),
      userId: auth.currentUser.uid
    };
    
    console.log('taskService: Tentando adicionar tarefa ao Firestore:', JSON.stringify(newTask));
    
    try {
      // Tentar adicionar a tarefa ao Firestore
      const docRef = await addDoc(tasksCollection, newTask);
      console.log('taskService: Tarefa adicionada com sucesso, ID:', docRef.id);
      return docRef;
    } catch (firestoreError) {
      console.error('taskService: Erro do Firestore ao adicionar tarefa:', firestoreError);
      console.error('taskService: Código do erro:', firestoreError.code);
      console.error('taskService: Mensagem do erro:', firestoreError.message);
      
      // Verificar se é um erro de permissão
      if (firestoreError.code === 'permission-denied') {
        console.error('taskService: Erro de permissão. Verifique as regras do Firestore.');
        throw new Error('Permissão negada ao adicionar tarefa. Verifique as regras do Firestore.');
      }
      
      throw firestoreError;
    }
  } catch (error) {
    console.error('taskService: Erro geral ao adicionar tarefa:', error);
    throw error;
  }
};

// Atualizar uma tarefa existente
export const updateTask = async (id, updatedTask) => {
  try {
    if (!auth.currentUser) {
      throw new Error('Usuário não autenticado');
    }
    
    const taskRef = doc(db, 'tasks', id);
    return await updateDoc(taskRef, updatedTask);
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    throw error;
  }
};

// Atualizar o status de uma tarefa
export const updateTaskStatus = async (id, status) => {
  try {
    if (!auth.currentUser) {
      throw new Error('Usuário não autenticado');
    }
    
    const taskRef = doc(db, 'tasks', id);
    return await updateDoc(taskRef, { status });
  } catch (error) {
    console.error('Erro ao atualizar status da tarefa:', error);
    throw error;
  }
};

// Excluir uma tarefa
export const deleteTask = async (id) => {
  try {
    if (!auth.currentUser) {
      throw new Error('Usuário não autenticado');
    }
    
    const taskRef = doc(db, 'tasks', id);
    return await deleteDoc(taskRef);
  } catch (error) {
    console.error('Erro ao excluir tarefa:', error);
    throw error;
  }
};
