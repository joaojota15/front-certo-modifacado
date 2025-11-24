import React from "react";
import csLogoImg from "../../assets/Logo Counter Strike.jpg";
import bannerCs from "../../assets/bannercs.png";
import csJogo from "../../assets/csjogo.jpg"; // ← nome correto

import "./CsPage.css";

export default function CsPage() {
  return (
    <div className="page">
      {/* Banner */}
      <section className="banner">
        <img
          src={bannerCs}
          alt="Counter Strike Banner"
          className="banner-img"
        />
        <div className="banner-title">Counter-Strike 2</div>
      </section>

      {/* Tabs */}
      <nav className="tabs">
        <button>Visão geral</button>
        <button>Fórum</button>
        <button>Avaliações</button>
      </nav>

      {/* Main Content */}
      <section className="content">
        <div className="screenshots">
          <img src={csLogoImg} alt="Screenshot 1" className="screenshot" />
          <img src={csJogo} alt="Screenshot 2" className="screenshot" /> {/* ← corrigido */}
        </div>

        <div className="about">
          <h2>Sobre este jogo</h2>
          <p>
            Entre no mundo de Counter-Strike, o jogo de tiro em primeira pessoa
            número 1 do mundo! Junte-se a uma equipe de cinco jogadores, seja
            como Terrorista ou Contra-Terrorista, e use suas habilidades táticas
            para dominar os objetivos em intensas batalhas de equipe.
          </p>

          <button className="add-btn">Adicionar à Biblioteca</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">GAMECONECT © 2025</footer>
    </div>
  );
}
