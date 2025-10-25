# Projeto Tarefas (Node + MongoDB)

Projeto simples de gerenciamento de tarefas baseado no material "Aula 14 - MongoDB".

## Requisitos
- Node.js (v16+ recomendado)
- MongoDB rodando localmente (ex.: `mongod`), conexão: mongodb://127.0.0.1/tarefa

## Como rodar
1. Abra o terminal na pasta do projeto:
```bash
cd tarefa_project
npm install
npm run dev
```
2. Acesse no browser:
`http://localhost:8081/rota_tarefas/tarefas`

## Estrutura
- src/server.js : servidor Express e configuração do Handlebars
- src/models/db.js : conexão mongoose
- src/models/tarefas.js : model das tarefas
- src/controller/tarefasController.js : rotas CRUD
- src/views : templates Handlebars (layouts + páginas)
- public : arquivos estáticos (css, js, img)

