// src/components/Hero.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import logoGameConnect from '../assets/Logo GAME CONNECT.svg';
// 🔑 Importa o hook de autenticação
import { useAuth } from '../context/AuthContext'; 

function Hero() {
    // 1. Acessa o estado de autenticação
    const { isAuthenticated } = useAuth();
    
    // 2. Define o caminho e o texto do botão com base no status
    let buttonPath;
    let buttonText;
    let titleText;
    
    // Se estiver logado
    if (isAuthenticated) {
        buttonPath = "/dashboard"; 
        buttonText = "Ver Comunidade Agora";
        titleText = "Bem-vindo de volta! Comece a interagir.";
    } 
    // Se NÃO estiver logado
    else {
        buttonPath = "/cadastro"; // Leva para o cadastro/login para criar conta
        buttonText = "Explorar comunidade";
        titleText = "A COMUNIDADE GAMER FEITA PARA VOCÊ";
    }


    return (
        // Note: O componente Hero precisa estar envolvido pelo <div className="container"> 
        // em HomePageContent (no App.jsx) para centralizar.
        <section className="hero-section">
            
            <div className="hero-logo">
                <img src={logoGameConnect} alt="Logo Game Connect" />
            </div>
            
            <div className="hero-content">
                {/* 3. Título condicional */}
                <h2>{titleText}</h2>
                <p>Compartilhe experiências, descubra novos jogos e conecte-se com outros players.</p>
                
                {/* 4. Link e Botão condicional */}
                <Link to={buttonPath}>
                    <button className="btn btn-primary">
                        {buttonText}
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Hero;