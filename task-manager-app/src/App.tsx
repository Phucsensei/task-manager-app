import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import AppRouter from './router/AppRouter'; // Import AppRouter
import TaskProvider from './feature/context/TaskContext';

function App() {
  return (
    <BrowserRouter>  {/* Bọc toàn bộ ứng dụng trong BrowserRouter */}
      <TaskProvider>
        <AppRouter />

      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
