

import React from 'react';
import { Link } from 'react-router-dom';
import logoGameConnect from '../assets/Logo GAME CONNECT.svg';

import { useAuth } from '../context/AuthContext'; 

function Hero() {
    
    const { isAuthenticated } = useAuth();
    
  
    let buttonPath;
    let buttonText;
    let titleText;
    
    
    if (isAuthenticated) {
        buttonPath = "/dashboard"; 
        buttonText = "Ver Comunidade Agora";
        titleText = "Bem-vindo de volta! Comece a interagir.";
    } 
   
    else {
        buttonPath = "/cadastro"; 
        buttonText = "Explorar comunidade";
        titleText = "A COMUNIDADE GAMER FEITA PARA VOCÊ";
    }


    return (
        
        <section className="hero-section">
            
            <div className="hero-logo">
                <img src={logoGameConnect} alt="Logo Game Connect" />
            </div>
            
            <div className="hero-content">
                {}
                <h2>{titleText}</h2>
                <p>Compartilhe experiências, descubra novos jogos e conecte-se com outros players.</p>
                
                {}
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