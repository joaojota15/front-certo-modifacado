import React, { useState } from 'react';

const ResetPasswordModal = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o email de recuperação
    console.log('Solicitação de redefinição de senha para:', email);
    onClose(); // Fecha o modal após o envio (ou exibe uma mensagem de sucesso)
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Recuperar Senha</h2>
        <p className="modal-description">Informe seu e-mail para enviarmos um link de recuperação de senha.</p>
        
        <form onSubmit={handleSubmit} className="settings-form">
          <div className="form-group">
            <label htmlFor="recovery-email">Email:</label>
            <input
              id="recovery-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full-width">
            Enviar Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordModal;