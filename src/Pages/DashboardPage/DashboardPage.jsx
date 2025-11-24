import React, { useState, useEffect } from 'react';
import './DashboardPage.styles.css';

import LeftSidebar from '../../components/Dashboard/LeftSidebar';
import MainFeed from '../../components/Dashboard/MainFeed';
import RightSidebar from '../../components/Dashboard/RightSidebar';
import { useAuth } from '../../context/AuthContext.jsx';
import api from '../../services/api';

function DashboardPage() {
  const { user, token } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  const loadPosts = async () => {
    try {
      const response = await api.get("/api/posts/recentes");
      setPosts(response.data);
      setLoadingPosts(false);
    } catch (error) {
      console.error("Erro ao carregar posts:", error);
      setLoadingPosts(false);
    }
  };

  // ✅ Função para criar post e atualizar estado
  const addPost = async (content) => {
    try {
      const response = await api.post("/api/posts/", {
        title: content.slice(0, 50), // exemplo: usa primeiras 50 letras como título
        description: content,
        category: "geral"
      });
      // Atualiza posts adicionando novo post no topo
      setPosts(prevPosts => [response.data, ...prevPosts]);
    } catch (error) {
      console.error("Erro ao criar post:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (token) loadPosts();
  }, [token]);

  return (
    <div className="dashboard-container">
      <LeftSidebar user={user} reloadPosts={loadPosts} />

      {loadingPosts ? (
        <div className="main-feed-loading">Carregando posts...</div>
      ) : (
        <MainFeed posts={posts} addPost={addPost} />
      )}

      <RightSidebar />
    </div>
  );
}

export default DashboardPage;
