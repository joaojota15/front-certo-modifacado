import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

function AuthSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    // A URL deve ser /auth-success?token=XYZ
    const params = new URLSearchParams(location.search);
    const token = params.get('token'); 

    if (token) {
      // Autentica no contexto e salva o token
      auth.login(token); 
      
      // Redireciona para o dashboard
      navigate('/dashboard', { replace: true });
    } else {
      // Volta para o login se não houver token
      navigate('/login', { replace: true });
    }
  }, [location, navigate, auth]);

  return (
    <div className="auth-callback-container">
      <h2 style={{ color: '#a855f7' }}>Processando Autenticação...</h2>
      <p style={{ color: '#ccc' }}>Aguarde enquanto confirmamos sua sessão.</p>
    </div>
  );
}

export default AuthSuccessPage;