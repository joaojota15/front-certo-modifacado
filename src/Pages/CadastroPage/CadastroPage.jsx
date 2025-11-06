// src/Pages/Pages/CadastroPage/CadastroPage.jsx

import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../context/AuthContext.jsx'; // <--- IMPORTAÇÃO CRÍTICA
import './CadastroPage.styles.css'; 


function CadastroPage() {
    const navigate = useNavigate(); 
    const auth = useAuth(); // <--- OBTÉM AS FUNÇÕES DE AUTH (login, register)
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    
    // Estado para feedback
    const [feedback, setFeedback] = useState({ message: '', type: '' }); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // FUNÇÃO FINAL: Implementa a chamada de API de Registro e Login Automático
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setFeedback({ message: '', type: '' });
        
        // 1. Validação de Senha 
        if (formData.password !== formData.confirmPassword) {
            setFeedback({ message: "As senhas não coincidem!", type: 'error' });
            return;
        }
        
        // 2. Chamada de API real para Registro
        try {
            const result = await auth.register(
                formData.username, 
                formData.email, 
                formData.password
            ); 
            
            if (result.success) {
                
                // --- SUCESSO NO REGISTRO ---
                
                // 3. Alerta e feedback visual (feedback do usuário)
                alert("Cadastro realizado com sucesso! Fazendo login automático..."); 
                setFeedback({ message: "Cadastro completo! Redirecionando...", type: 'success' });
                
                // 4. Tenta fazer login automaticamente com as novas credenciais
                const loginResult = await auth.login(formData.username, formData.password);

                if (loginResult.success) {
                    // 5. Redireciona para o Dashboard (após o token ser salvo no AuthContext)
                    navigate('/dashboard'); 
                } else {
                    // Se o login automático falhar (muito improvável)
                    alert("Falha no Login Automático. Tente fazer login manualmente.");
                    navigate('/login');
                }
                
            } else {
                // 6. Erro da API (Ex: Usuário já existe)
                setFeedback({ message: result.message || "Erro desconhecido ao cadastrar.", type: 'error' });
            }

        } catch (error) {
            console.error("Erro na comunicação com o servidor:", error);
            setFeedback({ message: "Erro de rede. Servidor Flask indisponível.", type: 'error' });
        }
    };

    return (
        <>
            <div className="cadastro-page-container">
                <div className="cadastro-form-wrapper">
                    
                    <form className="cadastro-form" onSubmit={handleSubmit}>
                        <h2>Crie sua conta</h2>

                        {/* Renderiza a mensagem de feedback (sucesso/erro) */}
                        {feedback.message && (
                            <p className={`feedback-${feedback.type}`} style={{ 
                                color: feedback.type === 'error' ? 'red' : 'green', 
                                fontWeight: 'bold' 
                            }}>
                                {feedback.message}
                            </p>
                        )}
                        
                        <div className="input-group">
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                placeholder="Nome de usuário" 
                                required 
                                value={formData.username} 
                                onChange={handleChange}     
                            />
                        </div>

                        <div className="input-group">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Email" 
                                required 
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="input-group">
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Senha" 
                                required 
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                placeholder="Confirmar Senha" 
                                required 
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <button type="submit" className="cadastro-button">
                            Cadastrar
                        </button>
                        
                        <div className="login-link">
                            <p>Já tem uma conta? <a href="/login">Faça login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CadastroPage;