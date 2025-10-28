import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';


import {
  LoginPageContainer,
  LoginCard,
  Title,
  Form,
  Input,
  MainButton,
  Separator,
  LinkText,
  DiscordButton,
  GoogleButton,
  SteamButton,
  
} from './LoginPage.styles.js'; 

function LoginPage() {
  const navigate = useNavigate();
  const auth = useAuth();
  
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    
    
    console.log("Dados de Login:", formData);
    
   
    auth.login(); 
    
    
    navigate('/dashboard');
  };

  return (
    <LoginPageContainer>
      
      {}

      <LoginCard>
        <Title>Bem-vindo de volta!</Title>
        
        <Form onSubmit={handleLoginSubmit}>
          <Input 
            type="email" 
            required 
            placeholder="Email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          <Input 
            type="password" 
            required 
            placeholder="Senha" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
          <MainButton type="submit">Entrar</MainButton>
        </Form>

        <LinkText onClick={() => alert('Funcionalidade a ser implementada!')}>
          Esqueceu sua senha?
        </LinkText>

        <Separator>OU</Separator>

        <DiscordButton>Continuar com Discord</DiscordButton>
        <GoogleButton>Continuar com Google</GoogleButton>
        <SteamButton>Continuar com Steam</SteamButton>
        
        <LinkText onClick={() => navigate('/cadastro')}>
          Não tem uma conta? Cadastre-se
        </LinkText>
      </LoginCard>
    </LoginPageContainer>
  );
}

export default LoginPage;