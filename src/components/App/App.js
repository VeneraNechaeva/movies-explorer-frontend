import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { api } from '../../utils/MainApi';

// Импортируем компоненты приложения, которые используем в Роутах
import Main from '../Main/Main.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Movies from '../Main/Movies.js';
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


  // Стейт для отображения карточек
  const [cards, setCards] = useState([]);
  // Стейт для отображения сохраненных карточек 
  const [savedCards, setSavedCards] = useState([]);
  // Хук возвращает функцию, которая позволяет рограммно перемещаться
  const navigate = useNavigate();

  // Эффект при монтровании, который проверяет токен
  useEffect(() => {
    getUserInfo();
  }, [])

  // Функция получает информацию о пользователе из куки
  const getUserInfo = () => {

    api.getUserInformation().then((res) => {
      if (res) {
        // авторизуем пользователя
        setCurrentUser(() => res);

        navigate("/movies", { replace: true });

        // api.getInitialCards()
        //   .then((cardsData) => {
        //     setCards(cardsData.data);
        //   })
        //   .catch((err) => {
        //     console.log(err); // выведем ошибку в консоль
        //   })
      }
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  // Стейт для контекста текущего пользователя
  const [currentUser, setCurrentUser] = useState({});

  // Обработчики событий: изменяют внутреннее состояние
  // Обратчик успешной регистрации
  function handleLogin(email, password) {
   return api.login(email, password).then((res) => {
      if (res) {
        getUserInfo();
      }
    })
  }

  function handleRegister(name, email, password) {
    return api.register(name, email, password).then((res) => {
      if (res) {
        handleLogin(email, password);
      }
    })
   }

  // Обратчик неудачной регистрации
  function handleFailRegister(err, setTextErrorMessage) {
    setTextErrorMessage(() => `Ошибка: ${err.message}`);
  }

  // Обратчик редактирования профиля
  function handleUpdateUser(userData) {
    api.savetUserInformation(userData.name, userData.email).then(() => {
      const updatedUserData = Object.assign({}, currentUser);
      updatedUserData.name = userData.name;
      updatedUserData.email = userData.email;
      setCurrentUser(updatedUserData);
    })

      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
  }

  // Обработчик выхода пользователя из профиля
  function handleSignOut() {
    api.signOut().then((res) => {
      if (res) {
        setCurrentUser(() => ({}));
      }
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
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
            <Route path="/signup" element={<Register onRegister={handleRegister} onFailRegister={handleFailRegister}  />} />
            <Route path="/signin" element={<Login onLogin={handleLogin} onFailLogin={handleFailRegister} />} />
            <Route path="*" element={<NotFound />} />

            {/* Защищённый маршруты */}
            <Route path="/movies" element={<ProtectedRoute element={Movies} cards={cards} handleSaveCard={handleSaveCard}
              handleDeleteCard={handleDeleteCard} loggedIn={currentUser.email ?? false} />} />
            <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} cards={savedCards} handleDeleteCard={handleDeleteCard} loggedIn={currentUser.email ?? false} />} />
            <Route path="/profile" element={<ProtectedRoute element={Profile} handleSignOut={handleSignOut} loggedIn={currentUser.email ?? false} onUpdateUser={handleUpdateUser}/>} />

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