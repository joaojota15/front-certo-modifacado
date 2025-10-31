import React from 'react';

const Modal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-button" onClick={onClose}>
          &times; 
        </button>

        <h2 className="modal-title">{post.title}</h2>
        <p className="modal-author">Por: {post.author}</p>
        
        <div className="modal-body">
            {/* Agora ele usa post.content, que é o texto único de cada post! */}
            <p>{post.content}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;