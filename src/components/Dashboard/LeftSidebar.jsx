import React, { useState } from 'react';
// 👈 Importa o componente modal
import CreatePostModal from '../CreatePostModal'; 

function LeftSidebar() {
  // 1. Estado para controlar a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal (será passada como prop)
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <aside className="left-sidebar">
      <h3>Categorias</h3>
      <ul className="categories-list">
        <li>FPS</li>
        <li>RPG</li>
        <li>MOBA</li>
        <li>Indie</li>
        <li>Retro</li>
        <li>Esports</li>
      </ul>
      
      {/* 2. Adiciona o onClick para abrir o modal */}
      <button 
        className="btn-create-post"
        onClick={handleOpenModal} 
      >
        + Criar Post
      </button>
      
      <nav className="user-nav">
        <a href="#">Meus Posts</a>
        <a href="#">Moderados</a>
        <a href="#">Salvos</a>
      </nav>
      
      {/* 3. Renderiza o modal condicionalmente */}
      {isModalOpen && (
        <CreatePostModal onClose={handleCloseModal} />
      )}
    </aside>
  );
}

export default LeftSidebar;