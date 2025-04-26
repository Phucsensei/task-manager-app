import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from './feature/context/ThemeContext';
import TaskProvider from './feature/context/TaskProvider';

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