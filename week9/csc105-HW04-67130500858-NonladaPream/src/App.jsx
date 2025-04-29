import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import FavouritesPage from './pages/FavouritesPage';
import NotFoundPage from './pages/NotFoundPage';
import FavouriteDetailPage from './pages/FavouriteDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/fav" element={<FavouritesPage />} />
        <Route path="/fav/:id" element={<FavouriteDetailPage/>}/>
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
