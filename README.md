# Todo React

Aplicação de lista de tarefas (To-Do) desenvolvida em React, com gerenciamento de estado local e componentes reutilizáveis.

## Funcionalidades

- Adicionar, editar, concluir e remover tarefas
- Persistência local das tarefas usando Local Storage
- Feedback visual de carregamento e ações
- Componentização avançada (Badge, Button, Card, Input, Skeleton, etc)
- Página de demonstração dos componentes

## Estrutura do Projeto

- **Página Inicial (`/`)**: Lista de tarefas com resumo e ações.
- **Página de Componentes (`/components`)**: Galeria de todos os componentes reutilizáveis do projeto.

### Componentes Principais

- **TasksList**: Exibe a lista de tarefas e botão para adicionar nova tarefa.
- **TaskItem**: Item individual da lista, com opções de editar, concluir e remover.
- **TasksSummary**: Mostra o total de tarefas criadas e concluídas.
- **Header/Footer**: Layout com navegação entre páginas.
- **Componentes reutilizáveis**: Badge, Button, ButtonIcon, Card, Container, Icon, InputCheckbox, InputText, Skeleton, Text.

### Gerenciamento de Tarefas

- As tarefas são armazenadas no Local Storage (`tasks`).
- Cada tarefa possui: `id`, `title`, `concluded` (opcional), `state` (`creating` ou `created`).
- Hooks personalizados (`useTasks`, `useTask`) para manipulação e atualização das tarefas.

### Scripts

- `npm run dev`: Inicia o servidor de desenvolvimento (Vite)
- `npm run build`: Gera build de produção
- `npm run preview`: Visualiza build de produção localmente
- `npm run lint`: Executa o linter

### Tecnologias Utilizadas

- React 19
- TypeScript
- Vite
- TailwindCSS
- class-variance-authority
- use-local-storage

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o projeto em modo desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse em [http://localhost:5173](http://localhost:5173)
