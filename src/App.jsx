import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

// 1. COMPONENTES: Os caminhos estão corretos e o nome 'Cabeçalho' com 'ç' foi mantido.
import Cabeçalho from './components/Cabeçalho';
import Hero from './components/Hero';
import JogosPopulares from './components/JogosPopulares';
import PostsRecentes from './components/PostsRecentes';
import Footer from './components/Footer';

// 2. PÁGINAS: ATENÇÃO NESTAS LINHAS! 
//    Os nomes dos arquivos foram ajustados para PascalCase (ex: LoginPage) 
//    e a extensão .jsx (se usada) foi removida do import.
import LoginPage from './Pages/LoginPage/LoginPage';         // CORRIGIDO: de 'loginpage' para 'LoginPage'
import CadastroPage from './Pages/CadastroPage/CadastroPage';

// 3. DASHBOARD e PROTECTED ROUTE:
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'; // CORRIGIDO: removida a extensão '.jsx'

// Layout principal que envolve a maioria das rotas
const AppLayout = () => (
  <div className="App">
    <Cabeçalho />
    <main className="container">
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
      
      {/* Rota Pai (usa o Layout) */}
      <Route path="/" element={<AppLayout />}>
        
        {/* Rotas Filhas */}
        <Route index element={<HomePageContent />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="cadastro" element={<CadastroPage />} />
        
        {/* Rotas Protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
        
      </Route>

      {/* Rota 404 */}
      <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />
    </Routes>
  );
}

export default App;