// src/Pages/LoginPage/LoginPage.jsx

import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import ResetPasswordModal from '../../components/ResetPasswordModal.jsx'; 
// Importa o novo modal

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
    email: '', // Campo que o usuário preenche
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // FUNÇÃO CORRIGIDA: Implementa a chamada de API
  const handleLoginSubmit = async (event) => { 
    event.preventDefault();
    
    // ATENÇÃO: Se o Back-end Flask espera 'username' e não 'email', 
    // você precisa mudar a linha abaixo para (formData.email, formData.password)
    // assumindo que o usuário usa o email como username.
    
    // Chama a função de login real do contexto, passando email como username para o Flask
    const result = await auth.login(formData.email, formData.password); 
    
    if (result.success) { // Verifica se o resultado da API foi sucesso
        console.log("Login bem-sucedido. Redirecionando...");
        navigate('/dashboard');
    } else {
        // Exibe mensagem de erro da API (credenciais inválidas, etc.)
        alert(result.message || "Erro no login. Verifique suas credenciais.");
    }
  };
  
  // Nova função para login social
  const handleSocialLogin = (platform) => {
      console.log(`Iniciando login com ${platform}...`);
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