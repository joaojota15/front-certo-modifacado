// src/context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react'; 

// URL base do seu Back-end Flask
const API_URL = 'http://127.0.0.1:5000/api/v1/auth'; // <-- URL CORRIGIDA PARA O BACKEND

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); // Adiciona estado de loading para a checagem inicial

    // 1. Efeito para carregar a sessão salva no navegador
    useEffect(() => {
        const savedToken = localStorage.getItem('authToken');
        if (savedToken) {
            setToken(savedToken);
            setIsAuthenticated(true);
        }
        setLoading(false); // Termina o loading após a checagem
    }, []); 

    // Função interna para salvar o token e o estado
    const saveAuth = (newToken) => {
        localStorage.setItem('authToken', newToken);
        setToken(newToken);
        setIsAuthenticated(true);
    };

    // 2. FUNÇÃO REAL: REGISTRO
    const handleRegister = async (username, email, password) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Registro bem-sucedido:", data);
                
                // No registro, o backend só retorna sucesso, não o token. O login deve ser chamado em seguida.
                return { success: true, message: data.msg };
            } else {
                console.error("Erro no registro:", data);
                return { success: false, message: data.msg || 'Registration failed' };
            }
        } catch (error) {
            console.error('Network Error during registration:', error);
            return { success: false, message: 'Network error or server unavailable' };
        } finally {
            setLoading(false);
        }
    };

    // 3. FUNÇÃO REAL: LOGIN
    const handleLogin = async (username, password) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Login bem-sucedido. Token recebido.");
                saveAuth(data.access_token); // Salva o token REAL recebido do Flask
                return { success: true };
            } else {
                console.error("Erro no login:", data);
                return { success: false, message: data.msg || 'Invalid credentials' };
            }
        } catch (error) {
            console.error('Network Error during login:', error);
            return { success: false, message: 'Network error or server unavailable' };
        } finally {
            setLoading(false);
        }
    };

    // 4. Função de logout que remove o token
    const logout = () => {
        localStorage.removeItem('authToken'); 
        setToken(null);
        setIsAuthenticated(false);
        console.log("Usuário desconectado.");
    };

    // 5. Inclui as novas funções no valor do contexto
    const value = { 
        isAuthenticated, 
        token, 
        loading, 
        login: handleLogin, // Mapeia a função de login real
        register: handleRegister, // Mapeia a função de registro
        logout 
    };

    // Exibe um loading state enquanto verifica o token inicial
    if (loading) {
        return <div>Loading Authentication...</div>; 
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}