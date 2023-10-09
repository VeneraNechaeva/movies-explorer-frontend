import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// Импортируем компоненты приложения, которые используем в Роутах
import Main from '../Main/Main.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Movies from '../Main/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import NotFound from '../NotFound/NotFound.js';

// Импортируем временный массив карточек cardList
import { cardList } from '../../utils/cardList.js';

import { timeFormat, concatUrl } from '../../utils/utils.js';

// Импортируем объект контекста 
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function App() {

  // Стейт для отображения карточек
  const [cards, setCards] = useState([]);

  // Стейт для отображения сохраненных карточек 
  const [savedCards, setSavedCards] = useState([]);

  // Эффект при монтровании, вызывает запрос и обновляет стейт-переменную
  // из полученного значения
  useEffect(() => {
    cardList.forEach((card) => {
      card["durationHuman"] = timeFormat(card["duration"]);
      card["image"]["fullUrl"] = concatUrl(card["image"]["url"]);
      card["isLikeCard"] = false;
    }
    );
    setCards(() => cardList)
  }, []);


  // Стейт для контекста текущего пользователя
  const [currentUser, setCurrentUser] = useState({});


  // Обработчики событий: изменяют внутреннее состояние

  // ВРЕМЕННОЕ РЕШЕНИЕ ДЛЯ ОТРИСОВКИ МИНЮ НАВИГАЦИИ
  // Обработчик, который поменяет статус пользователя
  function handleLogin(e) {
    e.preventDefault();
    setCurrentUser(() => ({
      email: "qwe@qwe.ru"
    }))
  }

  // Обработчик выхода пользователя из профиля
  function handleSignOut(e) {
    e.preventDefault();
    setCurrentUser(() => ({}))
  }

  // Обработчик, который по клику скопирует фильм в сохраненные
  function handleSaveCard(cardId) {
    const cardForSave = cardList.find((card) => card.id === cardId)
    cardForSave['isLikeCard'] = true
    setSavedCards((state) => ([cardForSave, ...state]))

  }

  // Обработчик удаления фильма
  function handleDeleteCard(cardId) {
    const unlikedCard = cardList.find((card) => card.id === cardId)
    unlikedCard['isLikeCard'] = false
    setSavedCards((state) => state.filter(card => card.id !== cardId))
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
            <Route path="/movies" element={<Movies cards={cards} handleSaveCard={handleSaveCard}  handleDeleteCard={handleDeleteCard}/>} />
            <Route path="/saved-movies" element={<SavedMovies cards={savedCards} handleDeleteCard={handleDeleteCard} />} />
            <Route path="/profile" element={<Profile handleSignOut={handleSignOut} />} />
            <Route path="*" element={<NotFound />} />

          </Routes>

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;