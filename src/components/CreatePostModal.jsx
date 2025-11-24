// src/components/CreatePostModal.jsx

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const CreatePostModal = ({ onClose, onPostCreated }) => {
  const { token } = useAuth();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  // Categorias mockadas
  const categories = ['FPS', 'RPG', 'MOBA', 'Indie', 'Retro', 'Esports'];

  // Envio ao backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Você precisa estar logado.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post(
        '/api/posts/',
        {
          title: title,
          description: content,
          category: category
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log("POST CRIADO ✔", response.data);

      // Atualiza feed no Dashboard (opcional)
      if (onPostCreated) {
        onPostCreated(response.data);
      }

      alert("Post publicado com sucesso!");
      onClose();

    } catch (error) {
      console.error("ERRO ao criar post:", error);
      alert("Erro ao criar post. Verifique os campos.");
    }

    setLoading(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>

        <h2 className="modal-title" style={{ color: '#8b5cf6' }}>
          Criar Novo Post
        </h2>

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
              className="settings-form-input"
              style={{
                padding: '10px',
                width: '100%',
                borderRadius: '4px',
                border: '1px solid #3c0ba0',
                backgroundColor: '#12012e',
                color: '#f0f0f0'
              }}
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
              placeholder="Descreva sua pergunta ou comentário..."
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #3c0ba0',
                backgroundColor: '#12012e',
                color: '#f0f0f0',
                borderRadius: '4px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-full-width"
            disabled={loading}
          >
            {loading ? "Publicando..." : "Publicar Post"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default CreatePostModal;
