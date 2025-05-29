# Gerenciador de Tarefas com Firebase

Um aplicativo de gerenciamento de tarefas desenvolvido com Vue.js e Firebase, permitindo armazenamento em nuvem e sincronização entre dispositivos.

## Funcionalidades

- Adicionar, editar e excluir tarefas
- Filtrar tarefas por status (pendente, em andamento, concluída, atrasada)
- Visualização em lista e Kanban
- Armazenamento em nuvem com Firebase
- Autenticação anônima para acesso seguro
- Design responsivo para desktop e mobile

## Tecnologias Utilizadas

- Vue.js 3 (Composition API)
- Firebase (Firestore e Authentication)
- Vite
- CSS moderno (variáveis CSS, flexbox, grid)

## Configuração do Projeto

```sh
npm install
```

### Compilação e Hot-Reload para Desenvolvimento

```sh
npm run dev
```

### Compilação e Minificação para Produção

```sh
npm run build
```

### Deploy para GitHub Pages

O projeto está configurado para ser facilmente implantado no GitHub Pages. Você pode usar um dos seguintes métodos:

#### Método 1: Script de Deploy

```sh
npm run deploy
```

Este comando executará o script `deploy.sh` que fará o build do projeto e o enviará para a branch `gh-pages`.

#### Método 2: GitHub Actions

O projeto inclui um workflow de GitHub Actions que automaticamente faz o deploy para o GitHub Pages sempre que houver um push para a branch `main`.

## Acesso ao Aplicativo

Você pode acessar o aplicativo publicado em: https://caiordev.github.io/organizacao-tarefas/
