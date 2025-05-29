import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBGDDe4iVXrB2rWKh9gc_ToojzGmzPnOL4",
  authDomain: "guia-estudos-643c5.firebaseapp.com",
  projectId: "guia-estudos-643c5",
  storageBucket: "guia-estudos-643c5.firebaseapp.com",
  messagingSenderId: "463886830136",
  appId: "1:463886830136:web:f25495dbed907fb78ab4cd"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar serviços
const db = getFirestore(app);
const auth = getAuth(app);

// Autenticação anônima
const anonymousAuth = async () => {
  try {
    await signInAnonymously(auth);
    console.log('Autenticação anônima realizada com sucesso');
  } catch (error) {
    console.error('Erro na autenticação anônima:', error);
  }
};

// Executar autenticação anônima
anonymousAuth();

export { db, auth };
