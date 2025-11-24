// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

function Header() {
    const { isAuthenticated, logout, user } = useAuth(); 
    const username = user?.username || "ProGamer"; // pega do contexto ou fallback

    const userProfileLink = "perfil"; 
    const userSettingsLink = "settings"; 

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/">
                    <h1 className="logo-text">GAME CONNECT</h1>
                </Link>
                
                <nav className="header-nav">
                    {isAuthenticated ? (
                        <div className="profile-menu-wrapper">
                            <button className="btn btn-profile">
                                Olá, {username} 👤
                            </button>
                            
                            <div className="profile-dropdown">
                                <Link to={userProfileLink} className="dropdown-item"> 
                                    Meu Perfil
                                </Link>
                                
                                <Link to={userSettingsLink} className="dropdown-item">
                                    Configurações
                                </Link>
                                
                                <hr className="dropdown-separator" />
                                
                                <button
                                    onClick={logout} 
                                    className="dropdown-item btn-logout"
                                >
                                    Sair
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="btn btn-secondary">ENTRAR</button>
                            </Link>

                            <Link to="/cadastro">
                                <button className="btn btn-primary">CADASTRAR</button>
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;
