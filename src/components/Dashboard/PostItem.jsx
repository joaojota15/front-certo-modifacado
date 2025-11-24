import React from 'react';

function PostItem({ post }) {
  return (
    <div className="post-item">
      <div className="post-votes">
        <span>▲</span>
        <span>{post.votes ?? 0}</span>
      </div>

      <div className="post-content">
        <h4>{post.title}</h4>

        <small>
          por {post.author_username || "Usuário"} • {post.created_at || "agora"} • {post.category || "Geral"}
        </small>

        <p>{post.description}</p>
      </div>
    </div>
  );
}

export default PostItem;
