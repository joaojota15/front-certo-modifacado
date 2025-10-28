import React from 'react';


import logoCounterStrike from '../assets/Logo Counter Strike.jpg';
import logoFifa from '../assets/Logo Fifa 26.JPG';
import logoRainbowSix from '../assets/Logo Raimbow Six Siege X.jpg';

function PopularGames() {
  return (
    <section className="popular-games">
      <h3>Jogos Populares</h3>
      <div className="games-grid">
        <div className="game-card">
          <img src={logoCounterStrike} alt="Counter Strike" />
        </div>
        <div className="game-card">
          <img src={logoFifa} alt="FC 26" />
        </div>
        <div className="game-card">
          <img src={logoRainbowSix} alt="Rainbow Six Siege X" />
        </div>
      </div>
    </section>
  );
}

export default PopularGames;
