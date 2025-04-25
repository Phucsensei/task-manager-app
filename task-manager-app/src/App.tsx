import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import TaskProvider from './feature/context/taskProvider';

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