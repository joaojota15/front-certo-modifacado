import React, { useState } from 'react';
import PostItem from './PostItem';

function MainFeed({ posts, addPost }) {
  const [postContent, setPostContent] = useState('');
  const MAX_CHARS = 280;

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (postContent.trim() === '') return;

    try {
      await addPost(postContent); // envia ao backend e atualiza a lista
      setPostContent(''); // limpa textarea
    } catch (error) {
      alert("Erro ao criar post.");
    }
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
        <div className="post-actions" style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: '10px'
        }}>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={postContent.trim() === ''}
          >
            Postar
          </button>
        </div>
      </form>

      {posts.map(post => <PostItem key={post.id} post={post} />)}

      <button className="load-more-btn">Carregar mais</button>
    </main>
  );
}

export default MainFeed;
