

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);


export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  const login = () => {
    console.log("Usuário logado com sucesso!");
    setIsAuthenticated(true);
  };

  
  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = { isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export function useAuth() {
  return useContext(AuthContext);
}