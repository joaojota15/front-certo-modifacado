import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

// Componentes Layout/Funcionais
import Cabeçalho from './components/Cabeçalho';
import Hero from './components/Hero';
import JogosPopulares from './components/JogosPopulares';
import PostsRecentes from './components/PostsRecentes';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// Páginas Públicas
import LoginPage from './Pages/LoginPage/loginpage.jsx';
import CadastroPage from './Pages/CadastroPage/CadastroPage';

// 🔑 NOVO: Importa a página de sucesso/callback de autenticação
import AuthSuccessPage from './Pages/AuthSuccessPage/AuthSuccessPage'; 

// Páginas Protegidas
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import PerfilPage from './Pages/PerfilPage/PerfilPage'; 
import SettingsPage from './Pages/SettingsPage/SettingsPage'; 


// Layout principal que envolve a maioria das rotas (Cabeçalho e Footer)
const AppLayout = () => (
    <div className="App">
        <Cabeçalho />
        {/* Adiciona aqui a barra de navegação/menu se houver */}
        <main>
            <Outlet /> 
        </main>
        <Footer />
    </div>
);


const HomePageContent = () => (
    <div className="container"> 
        <Hero />
        <JogosPopulares />
        <PostsRecentes />
    </div>
);

function App() {
    return (
        <Routes>
            
            <Route path="/" element={<AppLayout />}>
                
                {/* ROTAS PÚBLICAS */}
                <Route index element={<HomePageContent />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="cadastro" element={<CadastroPage />} />
                
                {/* 💥 ROTA DE CALLBACK PARA LOGIN SOCIAL */}
                {/* Esta rota receberá o token do Backend após o login com Google/Discord/Steam */}
                <Route path="auth-success" element={<AuthSuccessPage />} />
                
                
                {/* ROTAS PROTEGIDAS */}
                <Route element={<ProtectedRoute />}>
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="perfil" element={<PerfilPage />} /> 
                    <Route path="settings" element={<SettingsPage />} /> 
                </Route>
                
            </Route>

            {/* Rota para páginas que não precisam do Cabeçalho/Footer (opcional) */}
            {/* <Route path="/alguma-outra-coisa" element={<OutraPage />} /> */}

            {/* Rota 404 */}
            <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />
        </Routes>
    );
}

export default App;