import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { api } from '../../utils/MainApi';
import * as auth from '../auth';

// Импортируем компоненты приложения, которые используем в Роутах
import Main from '../Main/Main.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import NotFound from '../NotFound/NotFound.js';
import ProtectedRoute from '../ProtectedRoute';

// Импортируем временный массив карточек cardList
import { cardList } from '../../utils/cardList.js';
import { timeFormat, concatUrl } from '../../utils/utils.js';

// Импортируем объект контекста 
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  // Стейт с текстом ошибки
  const [textErrorMessage, setTextErrorMessage] = useState('Что-то пошло не так! Попробуйте ещё раз.');

  // Стейт для отображения карточек
  const [cards, setCards] = useState([]);

  // Стейт для отображения сохраненных карточек 
  const [savedCards, setSavedCards] = useState([]);

  // Стейт статуса пользователя — вошёл он в систему или нет
  const [loggedIn, setLoggedIn] = useState(false);

  // Хук возвращает функцию, которая позволяет рограммно перемещаться
  const navigate = useNavigate();

  // Эффект при монтровании, который проверяет токен
  useEffect(() => {
    tokenCheck();
  }, [])

  // Функция получает информацию о пользователе из куки
  const tokenCheck = () => {

    auth.getContent().then((res) => {
      if (res) {
        // авторизуем пользователя
        setCurrentUser(() => res);
        setLoggedIn(true);
        navigate("/movies", { replace: true });

        api.getInitialCards()
          .then((cardsData) => {
            setCards(cardsData.data);
          })
          .catch((err) => {
            console.log(err); // выведем ошибку в консоль
          })
      }
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  // Стейт для контекста текущего пользователя
  const [currentUser, setCurrentUser] = useState({});

  // Обработчики событий: изменяют внутреннее состояние
  
  // Обратчик успешной РЕГИСТРАЦИИ
  function handleSuccessRegistr() {
    navigate('/movies', { replace: true })
  }

  // Обратчик неудачной РЕГИСТРАЦИИ
  function handleFailRegister(err) {
    setTextErrorMessage(() => `Ошибка: ${err.body.error}`);
  }
 
  // Метод, который поменяет статус пользователя
  function handleLogin(e) {
    e.preventDefault();
    tokenCheck();
    setLoggedIn({
      loggedIn: true
    })
  }

  // // ВРЕМЕННОЕ РЕШЕНИЕ ДЛЯ ОТРИСОВКИ МИНЮ НАВИГАЦИИ
  // // Обработчик, который поменяет статус пользователя
  // function handleLogin(e) {
  //   e.preventDefault();
  //   setCurrentUser(() => ({
  //     email: "qwe@qwe.ru"
  //   }))
  // }


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
            <Route path="/signup" element={<Register onSuccessRegister={handleSuccessRegistr} onFailRegister={handleFailRegister} />} />
            <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
            <Route path="*" element={<NotFound />} />

            {/* Защищённый маршруты */}
            <Route path="/movies" element={<ProtectedRoute element={Movies} cards={cards} handleSaveCard={handleSaveCard}
              handleDeleteCard={handleDeleteCard} loggedIn={loggedIn} />} />
            <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} cards={savedCards} handleDeleteCard={handleDeleteCard} loggedIn={loggedIn} />} />
            <Route path="/profile" element={<ProtectedRoute element={Profile} handleSignOut={handleSignOut} loggedIn={loggedIn} />} />

          </Routes>

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;



  // // Эффект при монтровании, вызывает запрос и обновляет стейт-переменную
  // // из полученного значения
  // useEffect(() => {
  //   cardList.forEach((card) => {
  //     card["durationHuman"] = timeFormat(card["duration"]);
  //     card["image"]["fullUrl"] = concatUrl(card["image"]["url"]);
  //     card["isLikeCard"] = false;
  //   }
  //   );
  //   setCards(() => cardList)
  // }, []);