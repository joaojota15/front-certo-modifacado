import React, { useState } from 'react'; // 1. Adicionado useState
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
  // 2. REMOVIDOS: Header e AppLogo do import
} from './LoginPage.styles.js'; 

function LoginPage() {
  const navigate = useNavigate();
  const auth = useAuth();
  
  // 3. Estado para capturar Email e Senha
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
    
    // 4. Aqui você faria a validação e chamada real à API
    console.log("Dados de Login:", formData);
    
    // Lógica de Autenticação (usando seu contexto)
    auth.login(); 
    
    // Redirecionamento
    navigate('/dashboard');
  };

  return (
    <LoginPageContainer>
      
      {/* 5. REMOVIDO: O <Header> e <AppLogo> foram removidos para parar a duplicação */}

      <LoginCard>
        <Title>Bem-vindo de volta!</Title>
        
        <Form onSubmit={handleLoginSubmit}>
          <Input 
            type="email" 
            required 
            placeholder="Email" 
            name="email" // 6. Adicionado 'name'
            value={formData.email} // 7. Input controlado
            onChange={handleChange} // 8. Evento de captura
          />
          <Input 
            type="password" 
            required 
            placeholder="Senha" 
            name="password" // 6. Adicionado 'name'
            value={formData.password} // 7. Input controlado
            onChange={handleChange} // 8. Evento de captura
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