import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

// 1. COMPONENTES:
import Cabeçalho from './components/Cabeçalho';
import Hero from './components/Hero';
import JogosPopulares from './components/JogosPopulares';
import PostsRecentes from './components/PostsRecentes';
import Footer from './components/Footer';

// 2. PÁGINAS:
import LoginPage from './Pages/LoginPage/loginpage.jsx';
import CadastroPage from './Pages/CadastroPage/CadastroPage';
import PerfilPage from './Pages/PerfilPage/PerfilPage';
// 🔑 CORREÇÃO: Importa a página real de Configurações
import SettingsPage from './Pages/SettingsPage/SettingsPage'; 

// 3. DASHBOARD e PROTECTED ROUTE:
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// 💥 REMOVIDO: O placeholder 'const SettingsPage = () => <h1>...</h1>;' foi removido daqui.


// Layout principal que envolve a maioria das rotas
const AppLayout = () => (
    <div className="App">
        <Cabeçalho />
        {/* A classe 'container' foi removida do main, corrigindo conflitos de layout. */}
        <main>
            <Outlet /> 
        </main>
        <Footer />
    </div>
);

// Conteúdo da Página Inicial
const HomePageContent = () => (
    <>
        <Hero />
        <JogosPopulares />
        <PostsRecentes />
    </>
);

function App() {
    return (
        <Routes>
            
            <Route path="/" element={<AppLayout />}>
                
                {/* Rotas Filhas Públicas */}
                <Route index element={<HomePageContent />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="cadastro" element={<CadastroPage />} />
                
                {/* Rotas Protegidas */}
                <Route element={<ProtectedRoute />}>
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="perfil" element={<PerfilPage />} /> 
                    {/* Agora, esta rota usa o componente importado */}
                    <Route path="settings" element={<SettingsPage />} /> 
                </Route>
                
            </Route>

            <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />
        </Routes>
    );
}

export default App;