import React, { useState } from 'react';
import PostItem from './PostItem'; 

function MainFeed({ posts }) {
  const [postContent, setPostContent] = useState('');
  
  // A variável MAX_CHARS é mantida apenas para a lógica de validação, mas o contador visual é removido.
  const MAX_CHARS = 280;

  const handlePostSubmit = (e) => {
    e.preventDefault(); 
    
    if (postContent.trim() === '') {
      alert('O post não pode estar vazio!');
      return;
    }

    // ⚠️ Lógica de Envio para o Backend (simulação):
    console.log('Novo Post a ser enviado:', postContent);
    alert(`Post publicado: "${postContent.substring(0, 50)}..."`);
    
    setPostContent(''); 
  };

  return (
    <main className="main-feed">
      
      <form onSubmit={handlePostSubmit} className="create-post-box">
        <textarea
          placeholder="No que você está pensando? Compartilhe com a comunidade..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          maxLength={MAX_CHARS}
          rows="4" 
        />
        
        {/* 💥 DIV DE AÇÕES AJUSTADA */}
        {/* Não há mais o contador aqui. O botão será alinhado à direita via CSS. */}
        <div className="post-actions" style={{ 
            display: 'flex', 
            justifyContent: 'flex-end', /* 💥 NOVO: Alinha o conteúdo à direita */
            alignItems: 'center',
            marginTop: '10px'
        }}>
          
          <button 
            type="submit" 
            className="btn btn-primary" // Adicionei a classe btn-primary para o estilo visual
            disabled={postContent.trim() === ''}
          >
            Postar
          </button>
        </div>
      </form>

      
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
      
      <button className="load-more-btn">Carregar mais</button>
    </main>
  );
}

export default MainFeed;