// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Home from './pages/HomePage';
import LanguageSelector from './components/LanguageSelector';

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <Router>
      <div className="container mx-auto p-4">
        <LanguageSelector />
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/home" /> : <LoginPage />} />
          <Route path="/register" element={user ? <Navigate to="/home" /> : <RegisterPage />} />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
