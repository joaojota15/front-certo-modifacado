import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

// CONTEXTO DE AUTENTICAÇÃO
import { AuthProvider } from './context/AuthContext';

// COMPONENTES DE LAYOUT
import Cabeçalho from './components/Cabeçalho';
import Hero from './components/Hero';
import JogosPopulares from './components/JogosPopulares';
import PostsRecentes from './components/PostsRecentes';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// PÁGINAS PÚBLICAS
import LoginPage from './Pages/LoginPage/loginpage.jsx';
import CadastroPage from './Pages/CadastroPage/CadastroPage';

// CALLBACK SOCIAL LOGIN
import AuthSuccessPage from './Pages/AuthSuccessPage/AuthSuccessPage';

// PÁGINAS PROTEGIDAS
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import PerfilPage from './Pages/PerfilPage/PerfilPage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';

// PÁGINA DO JOGO – COUNTER-STRIKE
import CsPage from './Pages/GamePage/CsPage';

// =============================
// LAYOUT GERAL COM HEADER + FOOTER
// =============================
const AppLayout = () => (
    <div className="App">
        <Cabeçalho />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
);

// =============================
// CONTEÚDO DA HOME
// =============================
const HomePageContent = () => (
    <div className="container">
        <Hero />
        <JogosPopulares />
        <PostsRecentes />
    </div>
);

// =============================
// ROTAS PRINCIPAIS
// =============================
function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    
                    {/* ROTAS PÚBLICAS */}
                    <Route index element={<HomePageContent />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="cadastro" element={<CadastroPage />} />
                    <Route path="auth-success" element={<AuthSuccessPage />} />

                    {/* ROTAS PROTEGIDAS */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="dashboard" element={<DashboardPage />} />
                        <Route path="perfil" element={<PerfilPage />} />
                        <Route path="settings" element={<SettingsPage />} />
                        <Route path="jogo/cs" element={<CsPage />} /> {/* Página do CS */}
                    </Route>
                </Route>

                {/* PÁGINA 404 */}
                <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
