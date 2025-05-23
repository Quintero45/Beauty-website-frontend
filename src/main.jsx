import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { AuthProvider } from './components/AuthContext'; // 👈 Importa el contexto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* 👈 Envuelve App con el proveedor */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
