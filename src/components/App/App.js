import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes, Navigate } from 'react-router-dom';

// Импортируем компоненты приложения, которые используем в Роутах
import Main from '../Main/Main.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import NotFound from '../NotFound/NotFound.js';

// Импортируем объект контекста 
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  // Стейт для контекста текущего пользователя
  const [currentUser, setCurrentUser] = useState({});


  // ВРЕМЕННОЕ РЕШЕНИЕ ДЛЯ ОТРИСОВКИ МИНЮ НАВИГАЦИИ
  // Метод, который поменяет статус пользователя
  function handleLogin(e) {
    e.preventDefault();
    setCurrentUser(()=>  ({
      email: "qwe@qwe.ru"
     }))
  }

  function handleSignOut(e) {
    e.preventDefault();
    setCurrentUser(()=>  ({}))
  }

  return (
    // Используем провайдер контекста текущего пользователя
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">

          <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile handleSignOut={handleSignOut}/>} />
            <Route path="*" element={<NotFound />} />

          </Routes>

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;