# Todo React

This project was developed during the React training course by Rocketseat.

A to-do list application built with React, featuring local state management and reusable components.

## Features

- Add, edit, complete, and remove tasks
- Persist tasks using Local Storage
- Visual feedback for loading and actions
- Advanced componentization (Badge, Button, Card, Input, Skeleton, etc.)
- Component showcase page

## Project Structure

- **Home Page (`/`)**: Task list with summary and actions.
- **Components Page (`/components`)**: Gallery of all reusable components in the project.

### Main Components

- **TasksList**: Displays the list of tasks and a button to add a new task.
- **TaskItem**: Individual task item with options to edit, complete, and remove.
- **TasksSummary**: Shows the total number of created and completed tasks.
- **Header/Footer**: Layout with navigation between pages.
- **Reusable components**: Badge, Button, ButtonIcon, Card, Container, Icon, InputCheckbox, InputText, Skeleton, Text.

### Task Management

- Tasks are stored in Local Storage (`tasks`).
- Each task has: `id`, `title`, `concluded` (optional), `state` (`creating` or `created`).
- Custom hooks (`useTasks`, `useTask`) for handling and updating tasks.

### Scripts

- `npm run dev`: Start the development server (Vite)
- `npm run build`: Build for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run the linter

### Technologies Used

- React 19
- TypeScript
- Vite
- TailwindCSS
- class-variance-authority
- use-local-storage

## How to run the project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Access at [http://localhost:5173](http://localhost:5173)
