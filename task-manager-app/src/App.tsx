import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import TaskProvider from './feature/context/TaskContext';

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <AppRouter />
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;