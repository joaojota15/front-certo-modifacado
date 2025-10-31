import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import ResetPasswordModal from '../../components/ResetPasswordModal.jsx'; // 👈 Importa o novo modal


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
  
  // Novo estado para o modal de recuperação de senha
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  
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
    
    // Lógica de autenticação com e-mail/senha
    console.log("Dados de Login:", formData);
    
    auth.login(); 
    
    navigate('/dashboard');
  };
  
  // Nova função para login social
  const handleSocialLogin = (platform) => {
      console.log(`Iniciando login com ${platform}...`);
      // Aqui, você implementaria o redirecionamento ou pop-up para o serviço OAuth.
      // Exemplo: window.location.href = `/api/auth/${platform}`;
      alert(`Função de login com ${platform} ativada!`);
  };

  return (
    <LoginPageContainer>
      
      {/* 3. Renderização Condicional do Modal */}
      {isResetModalOpen && (
        <ResetPasswordModal onClose={() => setIsResetModalOpen(false)} />
      )}

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

        {/* Altera a ação para abrir o modal */}
        <LinkText onClick={() => setIsResetModalOpen(true)}>
          Esqueceu sua senha?
        </LinkText>

        <Separator>OU</Separator>

        {/* Adiciona as funções de clique nos botões sociais */}
        <DiscordButton onClick={() => handleSocialLogin('Discord')}>
          Continuar com Discord
        </DiscordButton>
        <GoogleButton onClick={() => handleSocialLogin('Google')}>
          Continuar com Google
        </GoogleButton>
        <SteamButton onClick={() => handleSocialLogin('Steam')}>
          Continuar com Steam
        </SteamButton>
        
        <LinkText onClick={() => navigate('/cadastro')}>
          Não tem uma conta? Cadastre-se
        </LinkText>
      </LoginCard>
    </LoginPageContainer>
  );
}

export default LoginPage;