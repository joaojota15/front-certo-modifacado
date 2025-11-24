import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // Carrega sessão ao abrir
    useEffect(() => {
        const savedToken = localStorage.getItem('@GameConnect:token');

        if (savedToken) {
            api.defaults.headers.Authorization = `Bearer ${savedToken}`;
            setToken(savedToken);
            setIsAuthenticated(true);

            // Busca dados do usuário logado
            api.get('/api/usuarios/me')
                .then(res => setUser(res.data))
                .catch(err => console.error('Erro ao buscar usuário:', err));
        }

        setLoading(false);
    }, []);

    // REGISTRO
    const handleRegister = async (username, email, password, steam_id = null) => {
        try {
            await api.post('/api/auth/register', {
                username,
                email,
                password,
                steam_id
            });

            return { success: true };
        } catch (error) {
            console.error("Erro no registro:", error);
            const message = error.response?.data?.detail || 'Falha ao registrar.';
            return { success: false, message: String(message) };
        }
    };

    // LOGIN
    const handleLogin = async (email, password) => {
        try {
            // 1️⃣ Faz login e pega token
            const response = await api.post('/api/auth/login', { email, password });
            const { access_token } = response.data;

            // 2️⃣ Salva token no localStorage e headers
            localStorage.setItem('@GameConnect:token', access_token);
            api.defaults.headers.Authorization = `Bearer ${access_token}`;
            setToken(access_token);
            setIsAuthenticated(true);

            // 3️⃣ Busca dados do usuário
            const userResponse = await api.get('/api/usuarios/me');
            setUser(userResponse.data);

            return { success: true };
        } catch (error) {
            console.error("Erro no login:", error);
            const message = error.response?.data?.detail || 'Email ou senha incorretos.';
            return { success: false, message: String(message) };
        }
    };

    // LOGOUT
    const logout = () => {
        localStorage.removeItem('@GameConnect:token');
        api.defaults.headers.Authorization = undefined;
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
    };

    const value = {
        isAuthenticated,
        token,
        user,
        loading,
        login: handleLogin,
        register: handleRegister,
        logout
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
