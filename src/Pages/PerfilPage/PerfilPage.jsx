// src/Pages/PerfilPage/PerfilPage.jsx

import React from 'react';
// Importamos 'useNavigate' junto com 'Link'
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../context/AuthContext'; // ajuste o caminho se necessário
import fotoGhost from '../../assets/foto ghost.jpg';
import ghostReconImg from '../../assets/ghost-recon.jpg';
import csLogoImg from '../../assets/Logo Counter Strike.jpg'; // ajuste o caminho se necessário
import eaSportsImg from '../../assets/Capa-EA-Sports.jpg';
import mafiaImg from '../../assets/capa mafia.jpg';
import gtaVImg from '../../assets/gta-v-grand.jpg';
import rainbowSixImg from '../../assets/Logo Raimbow Six Siege X.jpg';








function PerfilPage() {
    // 1. Inicializar o hook useNavigate
    const navigate = useNavigate(); 
    
    const { user, isAuthenticated } = useAuth(); // pega usuário logado

    if (!isAuthenticated) {
        return <p>Você precisa estar logado para ver o perfil.</p>;
    }

    // 2. Função para navegar para o Dashboard
    // Assumindo que a rota do Dashboard é '/dashboard' ou apenas '/'
    const handleGoToDashboard = () => {
        // Você pode ajustar a rota aqui, por exemplo: navigate('/');
        navigate('/dashboard'); 
    };

    const username = user?.username || "Carregando...";
    const userLocation = user?.location || "Brasil"; // caso queira pegar do backend se tiver

    return (
        <div className="container profile-page-layout"> 
            
            {/* 1. COLUNA ESQUERDA (Perfil, Stats e Plataformas) */}
            <aside className="profile-sidebar">
                
                {/* 1.1 Cartão do Usuário */}
                <div className="user-card">
              <div className="profile-img-wrapper">
  <img
    src={user?.avatar || fotoGhost} // usa a foto do usuário ou a padrão
    alt={`${username} avatar`}
    style={{
      width: '200px',
      height: '230px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #7f00ff',
      display: 'block',
      margin: '0 auto 10px'
    }}
  />
</div>

                    
                    <h3>{username}</h3>
                    <p className="user-location">{userLocation}</p>

                    {/* Stats */}
                    <div className="user-stats-grid">
                        <div className="stat-item">
                            <span className="stat-value">112</span>
                            <span className="stat-label">jogos</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">185h</span>
                            <span className="stat-label">horas</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">42</span>
                            <span className="stat-label">achiv.</span>
                        </div>
                    </div>

                    {/* Botão de Perfil */}
                    {isAuthenticated && (
                        <Link to="/settings" className="btn btn-primary btn-edit-profile">Editar Perfil</Link>
                    )}
                </div>

                {/* 1.2 Lista de Plataformas */}
                <div className="platforms-section">
                    <h4>PLATAFORMAS</h4>
                    <ul className="platforms-list">
                        <li className="platform-item epic">Joao_jpj</li>
                        <li className="platform-item xbox">jotinha_09</li>
                        <li className="platform-item ps">jota_jtt09</li>
                      
                    </ul>
                </div>
            </aside>

            {/* 2. COLUNA CENTRAL (Biblioteca e Atividades) */}
            <section className="profile-content-main">
        
{/* NOVO BOTÃO DE NAVEGAÇÃO ADICIONADO AQUI */}
<button 
    onClick={handleGoToDashboard} 
    className="btn btn-tertiary btn-full-width btn-back-dashboard"
    style={{ 
        marginBottom: '20px',
        backgroundColor: '#7f00ff', 
        color: 'white',             
        border: 'none',           
        padding: '10px 15px',       
        borderRadius: '8px'        
    }} 
>
    ⬅️ Voltar para o Dashboard
</button>
{/* FIM DO NOVO BOTÃO */}
    
                
                {/* 2.1 Biblioteca de Jogos */}
                <div className="library-section">
                    <h2>Biblioteca</h2>
                    <div className="games-grid-perfil">
                        <div className="game-card-perfil">
  <img src={ghostReconImg} alt="Ghost Recon" className="game-image" />
  <span className="game-name">Ghost Recon</span>
</div>
<Link to="/jogo/cs" className="game-card-perfil">
  <img src={csLogoImg} alt="Counter-Strike" className="game-image" />
  <span className="game-name">Counter-Strike</span>
</Link>

<div className="game-card-perfil">
  <img src={eaSportsImg} alt="EA Sports" className="game-image" />
  <span className="game-name">EA Sports</span>
</div>

                       <div className="game-card-perfil">
  <img src={mafiaImg} alt="Mafia" className="game-image" />
  <span className="game-name">Mafia</span>
</div>

                      <div className="game-card-perfil">
  <img src={gtaVImg} alt="GTA V" className="game-image" />
  <span className="game-name">GTA V</span>
</div>

                      <div className="game-card-perfil">
  <img src={rainbowSixImg} alt="Rainbow Six Siege" className="game-image" />
  <span className="game-name">Rainbow Six Siege</span>
</div>

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
                        <li>• luangamplay</li>
                        <li>• noobmaster</li>
                        <li>• gamer_43224</li>
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