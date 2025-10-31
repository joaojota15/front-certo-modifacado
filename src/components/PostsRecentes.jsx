import React, { useState } from 'react';
import Modal from './modal.jsx';

function RecentPosts() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (postData) => {
    setSelectedPost(postData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const posts = [
    { 
      id: 1, 
      title: 'Qual a melhor mira para o Counter Strike da nova atualização?', 
      author: 'Lucas034',
      content: 'A melhor mira em CS2 atualmente é um ponto verde pequeno, com contorno fino e estático. Muitos profissionais estão usando o tamanho 1, espessura 0.5. Teste esta configuração para maior precisão e visibilidade.' 
    },
    { 
      id: 2, 
      title: 'Procurando time para o campeonato amador de CS', 
      author: 'CheiraBala103',
      content: 'Sou um IGL (In-Game Leader) com 3000 horas de jogo e estou montando um time sério para campeonatos amadores. Procuro jogadores dedicados e com ranking mínimo A+. Interessados, chamem no DM.'
    },
    { 
      id: 3, 
      title: 'Dicas de formação para o Ultimate Team no FC26', 
      author: 'ReiDoControle',
      content: 'Para o FC26, a formação 4-2-3-1 (estreita) ainda é a meta. Priorize volantes com alto work rate defensivo e alas rápidos. Mantenha a profundidade defensiva em 40-50 para evitar contra-ataques.'
    },
    { 
      id: 4, 
      title: 'Melhores operadores para defesa em R6 Siege atualmente', 
      author: 'Capitao_BR',
      content: 'Os melhores defensores no meta atual são Azami e Solis. Azami com seus Kiba Barriers ajuda a redefinir bombsite, enquanto Solis é crucial para anular drones e gadgets inimigos no início da rodada.'
    },
    { 
      id: 5, 
      title: '5 jogos indie que você provavelmente não jogou e deveria!', 
      author: 'ExploradordeJogos034',
      content: 'Você precisa conhecer: 1. Hades; 2. Slay the Spire; 3. Celeste; 4. Hollow Knight; e 5. Disco Elysium. São obras-primas que oferecem mais de 50 horas de conteúdo de altíssima qualidade!'
    }
  ];

  return (
    <section className="recent-posts">
      <h3>Posts Recentes</h3>
      <div className="posts-list">
        
        {posts.map(post => (
          <div 
            key={post.id} 
            className="post-item" 
            onClick={() => handlePostClick(post)} 
            style={{ cursor: 'pointer' }}
          >
            <p>[{post.title}] - por {post.author}</p>
          </div>
        ))}
        
      </div>

      {isModalOpen && selectedPost && (
        <Modal 
          post={selectedPost} 
          onClose={closeModal} 
        />
      )}
      
    </section>
  );
}

export default RecentPosts;