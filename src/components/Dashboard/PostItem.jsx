import React from 'react';


function PostItem({ post }) {
  return (
    <div className="post-item">
      <div className="post-votes">
        <span>▲</span>
        <span>{post.votes}</span>
      </div>
      <div className="post-content">
        <h4>{post.title}</h4>
        <small>por {post.author} • {post.timestamp} • {post.category}</small>
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default PostItem;