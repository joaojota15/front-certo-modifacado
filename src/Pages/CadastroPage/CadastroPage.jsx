// src/Pages/CadastroPage/CadastroPage.jsx

import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; // 1. IMPORTADO: Hook para redirecionar
import './CadastroPage.styles.css'; 

// 2. REMOVIDO: import Cabeçalho from '../../components/Cabeçalho'; 
//    (Removido para evitar o cabeçalho duplicado)

function CadastroPage() {
  // Inicializa o useNavigate
  const navigate = useNavigate(); 
  
  // Definindo o estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Função para atualizar o estado sempre que o usuário digita algo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 3. ATUALIZADO: Função para lidar com o envio do formulário (agora assíncrona)
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    // Validação básica
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    
    // ----------------------------------------------------
    // AQUI VOCÊ ADICIONARÁ A LÓGICA DE API (AXIOS/FETCH)
    // ----------------------------------------------------
    
    console.log("Dados prontos para envio:", formData);
    
    try {
      // Simulação de chamada de API: Espere 2 segundos para simular o tempo de resposta
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      
      // Simulação de sucesso no cadastro
      alert("Cadastro realizado com sucesso! Redirecionando para o Login.");
      
      // 4. AÇÃO CORRIGIDA: Redireciona para a tela de login
      navigate('/login'); 

    } catch (error) {
      console.error("Erro no cadastro (simulado):", error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <>
      {/* 5. REMOVIDO: O Cabeçalho não é mais renderizado aqui */}
      
      <div className="cadastro-page-container">
        <div className="cadastro-form-wrapper">
          {/* Ligando a função handleSubmit ao evento onSubmit do formulário */}
          <form className="cadastro-form" onSubmit={handleSubmit}>
            <h2>Crie sua conta</h2>
            
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