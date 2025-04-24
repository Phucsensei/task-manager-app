import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import AppRouter from './router/AppRouter'; // Import AppRouter

function App() {
  return (
    <BrowserRouter>  {/* Bọc toàn bộ ứng dụng trong BrowserRouter */}
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
