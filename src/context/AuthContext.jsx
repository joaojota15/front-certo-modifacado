import React, { createContext, useState, useContext, useEffect } from 'react'; // 👈 Adiciona useEffect

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // 💥 Novo estado para o token
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 1. Efeito para carregar a sessão salva no navegador
  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      // Aqui, futuramente, você pode verificar a validade do token (Backend)
    }
  }, []); // Executa apenas uma vez na montagem

  // 2. Função de login que aceita e salva o token
  const login = (newToken) => {
    // Usa o token real ou um mock se estivermos apenas simulando
    const tokenToSave = newToken || "MOCKED_TOKEN_DEV_12345"; 
    
    // Salva no Local Storage (mantém a sessão após recarregar)
    localStorage.setItem('authToken', tokenToSave);
    
    setToken(tokenToSave);
    setIsAuthenticated(true);
    console.log("Usuário logado e token salvo!");
  };

  // 3. Função de logout que remove o token
  const logout = () => {
    localStorage.removeItem('authToken'); // Remove do navegador
    setToken(null);
    setIsAuthenticated(false);
    console.log("Usuário desconectado.");
  };

  // 4. Inclui o token no valor do contexto
  const value = { isAuthenticated, token, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}