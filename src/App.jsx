import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';


import Cabeçalho from './components/Cabeçalho';
import Hero from './components/Hero';
import JogosPopulares from './components/JogosPopulares';
import PostsRecentes from './components/PostsRecentes';
import Footer from './components/Footer';


import LoginPage from './Pages/LoginPage/loginpage.jsx';
import CadastroPage from './Pages/CadastroPage/CadastroPage';
import PerfilPage from './Pages/PerfilPage/PerfilPage';
// 🔑 CORREÇÃO: Importa a página real de Configurações
import SettingsPage from './Pages/SettingsPage/SettingsPage'; 

// 3. DASHBOARD e PROTECTED ROUTE:
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';




// Layout principal que envolve a maioria das rotas
const AppLayout = () => (
    <div className="App">
        <Cabeçalho />
        {}
        <main>
            <Outlet /> 
        </main>
        <Footer />
    </div>
);


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
                
                {}
                <Route index element={<HomePageContent />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="cadastro" element={<CadastroPage />} />
                
                {}
                <Route element={<ProtectedRoute />}>
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="perfil" element={<PerfilPage />} /> 
                    {}
                    <Route path="settings" element={<SettingsPage />} /> 
                </Route>
                
            </Route>

            <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />
        </Routes>
    );
}

export default App;