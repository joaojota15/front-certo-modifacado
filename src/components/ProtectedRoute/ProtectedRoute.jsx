

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx'; 

function ProtectedRoute() {
  const { isAuthenticated } = useAuth(); // Pega o estado de autenticação do contexto

  
  if (!isAuthenticated) {
    
    return <Navigate to="/login" replace />;
  }

  
  return <Outlet />;
}

export default ProtectedRoute;