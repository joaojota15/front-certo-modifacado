

import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './CadastroPage.styles.css'; 



function CadastroPage() {
  
  const navigate = useNavigate(); 
  
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    
   
    
    console.log("Dados prontos para envio:", formData);
    
    try {
     
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      
      
      alert("Cadastro realizado com sucesso! Redirecionando para o Login.");
      
      
      navigate('/login'); 

    } catch (error) {
      console.error("Erro no cadastro (simulado):", error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <>
      {}
      
      <div className="cadastro-page-container">
        <div className="cadastro-form-wrapper">
        
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