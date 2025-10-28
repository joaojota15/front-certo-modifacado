// src/Pages/PerfilPage/PerfilPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function PerfilPage() {
    // Dados de exemplo
    const username = "NICKNAME"; 
    const isLoggedUser = true; 

    return (
        // 💥 CORREÇÃO: Adicionamos a classe "container" de volta, combinada com o Grid de layout
        <div className="container profile-page-layout"> 
            
            {/* 1. COLUNA ESQUERDA (Perfil, Stats e Plataformas) */}
            <aside className="profile-sidebar">
                
                {/* 1.1 Cartão do Usuário */}
                <div className="user-card">
                    <div className="profile-img-placeholder"></div>
                    
                    <h3>{username}</h3>
                    <p className="user-location">Brasil</p>

                    {/* Stats */}
                    <div className="user-stats-grid">
                        <div className="stat-item">
                            <span className="stat-value">112</span>
                            <span className="stat-label">jogos</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">1845h</span>
                            <span className="stat-label">horas</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">42</span>
                            <span className="stat-label">achiv.</span>
                        </div>
                    </div>

                    {/* Botão de Perfil */}
                    {isLoggedUser && (
                        <Link to="/settings" className="btn btn-primary btn-edit-profile">Editar Perfil</Link>
                    )}
                </div>

                {/* 1.2 Lista de Plataformas */}
                <div className="platforms-section">
                    <h4>PLATAFORMAS</h4>
                    <ul className="platforms-list">
                        <li className="platform-item epic">GAMETAG</li>
                        <li className="platform-item xbox">GAMETAG</li>
                        <li className="platform-item ps">GAMETAG</li>
                        <li className="platform-item steam">GAMETAG</li>
                    </ul>
                </div>
            </aside>


            {/* 2. COLUNA CENTRAL (Biblioteca e Atividades) */}
            <section className="profile-content-main">
                
                {/* 2.1 Biblioteca de Jogos */}
                <div className="library-section">
                    <h2>Biblioteca</h2>
                    <div className="games-grid-perfil">
                        <div className="game-card-perfil">Cyberpunk 2077</div>
                        <div className="game-card-perfil">Counter-Strike</div>
                        <div className="game-card-perfil">Hades</div>
                        <div className="game-card-perfil">Stardew Valley</div>
                        <div className="game-card-perfil">Hollow Knight</div>
                        <div className="game-card-perfil">DOTA 2</div>
                    </div>
                </div>

                {/* 2.2 Últimas Atividades */}
                <div className="activities-section">
                    <h2>Últimas Atividades</h2>
                    <div className="activity-item">
                        <p className="activity-title">Bug no matchmaking do CS</p>
                        <p className="activity-details">Comentou em: "Problema na fila" • 2 horas atrás</p>
                    </div>
                    <div className="activity-item">
                        <p className="activity-title">Melhores indies de 2025</p>
                        <p className="activity-details">Postou: "Recomendo Hades e Celeste" • 1 dia atrás</p>
                    </div>
                    <div className="activity-item activity-new">
                        <p className="activity-title">Torneio semanal - Inscrição</p>
                        <p className="activity-details">Criou tópico: "Times 5v5" • 3 dias atrás</p>
                    </div>
                     <div className="activity-item activity-new">
                        <p className="activity-title">Torneio semanal - Inscrição</p>
                        <p className="activity-details">Criou tópico: "Times 5v5" • 3 dias atrás</p>
                    </div>
                </div>
                
                <button className="btn btn-secondary btn-full-width">Comentários</button>
            </section>


            {/* 3. COLUNA DIREITA (Amigos e Conquistas) */}
            <aside className="profile-sidebar-right">
                
                {/* 3.1 Lista de Amigos */}
                <div className="friends-section">
                    <h4>Amigos</h4>
                    <ul className="friends-list">
                        <li>• ProGamer</li>
                        <li>• IndieFan</li>
                        <li>• User123</li>
                    </ul>
                </div>

                {/* 3.2 Conquistas */}
                <div className="achievements-section">
                    <h4>conquistas</h4>
                    <div className="achievements-icons">
                        <span role="img" aria-label="trofeu">🏆</span>
                        <span role="img" aria-label="alvo">🎯</span>
                        <span role="img" aria-label="espadas">⚔️</span>
                    </div>
                    <div className="achievement-box-placeholder"></div>
                </div>
            </aside>
        </div>
    );
}

export default PerfilPage;