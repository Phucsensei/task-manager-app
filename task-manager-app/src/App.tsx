import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import TaskProvider from './feature/context/taskProvider';
import { ThemeProvider } from './feature/context/ThemeContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <TaskProvider>
          <AppRouter />
        </TaskProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;