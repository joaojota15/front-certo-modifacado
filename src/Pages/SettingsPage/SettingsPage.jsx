// src/Pages/SettingsPage/SettingsPage.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api"; // <-- IMPORTANTE

// ---------------------- COMPONENTE SECURITY SETTINGS ----------------------
const SecuritySettings = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setMessage("");

        if (newPassword !== confirmPassword) {
            setMessage("❌ As senhas não coincidem!");
            return;
        }

        try {
            setLoading(true);

            // Token armazenado quando o usuário fez login
            const token = localStorage.getItem("token");

            const response = await api.post(
                "/change-password",
                {
                    new_password: newPassword,
                    token: token
                }
            );

            setMessage("✅ Senha alterada! Um e-mail foi enviado.");
            setNewPassword("");
            setConfirmPassword("");

        } catch (err) {
            setMessage("❌ Erro ao alterar senha.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="settings-content-card">
            <h3>Segurança e Senha</h3>
            <p className="setting-description">Troque sua senha para manter sua conta segura.</p>

            <form className="settings-form" onSubmit={handlePasswordChange}>
                <div className="form-group">
                    <label>Nova Senha</label>
                    <input 
                        type="password" 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Digite a nova senha" 
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Confirmar Nova Senha</label>
                    <input 
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirme a nova senha" 
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Alterando..." : "Alterar Senha"}
                </button>

                {message && <p className="status-message">{message}</p>}
            </form>
        </div>
    );
};

// ---------------------- PROFILE SETTINGS ----------------------
const ProfileSettings = () => (
    <div className="settings-content-card">
        <h3>Informações do Perfil</h3>
        <p className="setting-description">
            Aqui você pode alterar seu nome de usuário, email e localização.
        </p>

        <form className="settings-form">
            <div className="form-group">
                <label>Nome de Usuário</label>
                <input type="text" value="ProGamer" readOnly />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" value="gamer@connect.com" readOnly />
            </div>
            <button type="submit" className="btn btn-primary">Salvar Alterações</button>
        </form>
    </div>
);

// ---------------------- PÁGINA PRINCIPAL ----------------------
function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");

    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return <ProfileSettings />;
            case "security":
                return <SecuritySettings />;
            default:
                return <ProfileSettings />;
        }
    };

    return (
        <div className="container">
            <h1 className="settings-title">Configurações da Conta</h1>

            <div className="settings-grid">
                <aside className="settings-sidebar">
                    <button
                        className={`settings-tab-btn ${activeTab === "profile" ? "active" : ""}`}
                        onClick={() => setActiveTab("profile")}
                    >
                        Perfil
                    </button>

                    <button
                        className={`settings-tab-btn ${activeTab === "security" ? "active" : ""}`}
                        onClick={() => setActiveTab("security")}
                    >
                        Segurança
                    </button>

                    <Link to="/perfil" className="settings-tab-btn settings-tab-back">
                        ← Voltar ao Perfil
                    </Link>
                </aside>

                <section className="settings-content-main">
                    {renderContent()}
                </section>
            </div>
        </div>
    );
}

export default SettingsPage;
