import React, { useState } from 'react';
// As classes CSS do modal (modal-overlay, modal-content, etc.) já devem estar no seu App.css

const CreatePostModal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ⚠️ Lógica de Envio para o Backend:
    console.log('Novo Post Enviado:', { title, content, category });
    
    // Simulação de sucesso:
    alert('Post criado com sucesso! (Simulação)');
    
    onClose(); // Fecha o modal
  };

  // As categorias devem ser carregadas de algum lugar, mas para o frontend, usamos um mock
  const categories = ['FPS', 'RPG', 'MOBA', 'Indie', 'Retro', 'Esports'];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title" style={{color: '#8b5cf6'}}>Criar Novo Post</h2>
        
        <form onSubmit={handleSubmit} className="settings-form">
          
          <div className="form-group">
            <label htmlFor="post-title">Título:</label>
            <input
              id="post-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Ex: Qual o melhor jogo Indie de 2024?"
              maxLength="80"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="post-category">Categoria:</label>
            <select
              id="post-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              // Use a mesma classe de input para ter o mesmo estilo
              className="settings-form-input" 
              style={{ padding: '10px', width: '100%', borderRadius: '4px', border: '1px solid #3c0ba0', backgroundColor: '#12012e', color: '#f0f0f0' }}
            >
              <option value="" disabled>Selecione uma categoria...</option>
              {categories.map(cat => (
                <option key={cat} value={cat.toLowerCase()}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="post-content">Conteúdo:</label>
            <textarea
              id="post-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows="5"
              placeholder="Descreva sua pergunta ou comentário detalhadamente..."
              // Use a mesma classe de input para ter o mesmo estilo
              style={{ width: '100%', padding: '10px', border: '1px solid #3c0ba0', backgroundColor: '#12012e', color: '#f0f0f0', borderRadius: '4px', boxSizing: 'border-box' }}
            />
          </div>
          
          <button type="submit" className="btn btn-primary btn-full-width">
            Publicar Post
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default CreatePostModal;