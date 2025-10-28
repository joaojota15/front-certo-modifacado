// src/Pages/SettingsPage/SettingsPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

// Componentes de Conteúdo das Abas
const ProfileSettings = () => (
    <div className="settings-content-card">
        <h3>Informações do Perfil</h3>
        <p className="setting-description">Aqui você pode alterar seu nome de usuário, email e localização.</p>
        
        <form className="settings-form">
            <div className="form-group">
                <label>Nome de Usuário</label>
                <input type="text" value="ProGamer" readOnly />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" value="gamer@connect.com" readOnly />
            </div>
            {/* O botão usa a classe btn-primary do seu app.css */}
            <button type="submit" className="btn btn-primary">Salvar Alterações</button>
        </form>
    </div>
);

const SecuritySettings = () => (
    <div className="settings-content-card">
        <h3>Segurança e Senha</h3>
        <p className="setting-description">Mantenha sua conta segura trocando sua senha regularmente.</p>
        
        <form className="settings-form">
            <div className="form-group">
                <label>Nova Senha</label>
                <input type="password" placeholder="Digite a nova senha" />
            </div>
            <div className="form-group">
                <label>Confirmar Nova Senha</label>
                <input type="password" placeholder="Confirme a nova senha" />
            </div>
            <button type="submit" className="btn btn-primary">Alterar Senha</button>
        </form>
    </div>
);


function SettingsPage() {
    // Estado para controlar qual aba está ativa (Abas: profile, security)
    const [activeTab, setActiveTab] = useState('profile');

    // Mapeia o estado ativo para o componente de conteúdo
    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <ProfileSettings />;
            case 'security':
                return <SecuritySettings />;
            default:
                return <ProfileSettings />;
        }
    };

    return (
        // Usa a classe 'container' para centralizar e as classes Grid
        <div className="container">
            
            <h1 className="settings-title">Configurações da Conta</h1>

            {/* Layout de duas colunas: menu e conteúdo */}
            <div className="settings-grid">
                
                {/* 1. Menu Lateral (Sidebar) */}
                <aside className="settings-sidebar">
                    <button 
                        className={`settings-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        Perfil
                    </button>
                    <button 
                        className={`settings-tab-btn ${activeTab === 'security' ? 'active' : ''}`}
                        onClick={() => setActiveTab('security')}
                    >
                        Segurança
                    </button>
                    {/* Link para voltar ao perfil */}
                    <Link to="/perfil" className="settings-tab-btn settings-tab-back">
                        ← Voltar ao Perfil
                    </Link>
                </aside>

                {/* 2. Conteúdo da Configuração */}
                <section className="settings-content-main">
                    {renderContent()}
                </section>
                
            </div>
        </div>
    );
}

export default SettingsPage;