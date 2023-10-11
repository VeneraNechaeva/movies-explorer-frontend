import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { api } from '../../utils/MainApi';
import { apiMovies } from '../../utils/MoviesApi';
// Импортируем компоненты приложения, которые используем в Роутах
import Main from '../Main/Main.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import NotFound from '../NotFound/NotFound.js';
import ProtectedRoute from '../ProtectedRoute';

import { concatUrl } from '../../utils/utils.js';

// Импортируем объект контекста 
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {


  // Стейт для отображения карточек
  const [cards, setCards] = useState([]);
  // Стейт для отображения сохраненных карточек 
  const [savedCards, setSavedCards] = useState([]);
  // Стейт для отображения прелоадера
  const [isLoading, setIsLoading] = useState(false);
  // Стейт для отображения в результате поиска "Ничего не найдено"
  const [isNothingFound, setIsNothingFound] = useState(false);
  // Стейт с текстом ошибки
  const [textErrorMessageForSearchForm, setTextErrorMessageForSearchForm] = useState("");
  // Хук возвращает функцию, которая позволяет рограммно перемещаться
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useState({});

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
        if ("searchResult" in localStorage) {
          const searchResult = JSON.parse(localStorage.getItem("searchResult"));
          setCards(() => searchResult['filterdCardsByDuration']);
          setSearchParams(() => searchResult);
        }
        api.getMovie()
          .then((movies) => {
            setSavedCards(() => movies.data);
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
  // Обратчик авторизации
  function handleLogin(email, password) {
    return api.login(email, password).then((res) => {
      if (res) {
        getUserInfo();
      }
    })
  }

  // Обработчик регистрации
  function handleRegister(name, email, password) {
    return api.register(name, email, password).then((res) => {
      if (res) {
        handleLogin(email, password);
      }
    })
  }

  // Обработчик неудачной регистрации и авторизации
  function handleFailRequest(err, setTextErrorMessage) {
    setTextErrorMessage(() => `Ошибка: ${err.message}`);
  }

  // Обработчик редактирования профиля
  function handleUpdateUser(userData) {
    return api.savetUserInformation(userData.name, userData.email).then(() => {
      const updatedUserData = Object.assign({}, currentUser);
      updatedUserData.name = userData.name;
      updatedUserData.email = userData.email;
      setCurrentUser(updatedUserData);
    })
  }

  // Обработчик выхода пользователя из профиля
  function handleSignOut() {
    api.signOut().then((res) => {
      if (res) {
        localStorage.removeItem('searchResult');
        setCards(() => ([]));
        setSearchParams(() => ({}));
        setCurrentUser(() => ({}));
      }
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  // Обработчик, который по клику скопирует фильм в сохраненные
  function handleSaveCard(cardId) {
    const likedCard = cards.find((card) => card.id === cardId)

    const cardForSave = {
      country: likedCard["country"],
      director: likedCard["director"],
      duration: likedCard["duration"],
      year: likedCard["year"],
      description: likedCard["description"],
      image: likedCard["image"],
      trailerLink: likedCard["trailerLink"],
      thumbnail: likedCard["thumbnail"],
      owner: likedCard["owner"],
      movieId: likedCard["movieId"],
      nameRU: likedCard["nameRU"],
      nameEN: likedCard["nameEN"],
    }

    api.saveMovie(cardForSave).then((res) => {
      if (res) {
        likedCard["isLikeCard"] = true;
        likedCard["_id"] = res.data["_id"];
        setSavedCards((state) => ([res.data, ...state]));
      }
    })
  }

  // Обработчик удаления фильма
  function handleDeleteCard(id, _id) {
    const unlikedCard = cards.find((card) => card.id === id)

    api.deletMovie(_id).then((res) => {
      if (res) {
        if (unlikedCard !== undefined)
          unlikedCard['isLikeCard'] = false

        setSavedCards((state) => state.filter(card => card._id !== _id))
      }
    })
  }

  // Обработчик поиска фильмов в Movies
  function handleSearch(filmName, isShort) {
    setCards(() => ([]));
    setIsLoading(() => (true));
    setIsNothingFound(() => (false));
    setTextErrorMessageForSearchForm(() => "");
    return apiMovies.getFilms().then((res) => {
      if (res) {

        res.forEach((card) => {
          card["thumbnail"] = concatUrl(card["image"]["formats"]["thumbnail"]["url"]);
          card["image"] = concatUrl(card["image"]["url"]);
          card["movieId"] = card["id"];
          const myCard = savedCards.find((savedCard) => savedCard.movieId === card["movieId"]);
          card["isLikeCard"] = myCard !== undefined;
          card["_id"] = myCard !== undefined ? myCard["_id"] : null;
        }
        );
        const filterdCardsByName = filterFilmsByName(filmName, res)
        const filterdCardsByDuration = isShort ? filterShortFilms(filterdCardsByName) : filterdCardsByName

        localStorage.setItem('searchResult',
          JSON.stringify({ filterdCardsByDuration, filmName, isShort }));

        setSearchParams(() => JSON.parse(localStorage.getItem("searchResult")));

        setCards(() => filterdCardsByDuration)
        setIsNothingFound(() => filterdCardsByDuration.length === 0);
      }
    }).catch(err => {
      setTextErrorMessageForSearchForm(() => "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
    }).finally(() => {
      setIsLoading(() => (false));
    });
  }

  // Обработчик поиска фильмов в SavedMovies
  function handleSearchSavedMovies(filmName, isShort) {
    setSavedCards(() => ([]));
    setIsLoading(() => (true));
    setIsNothingFound(() => (false));
    setTextErrorMessageForSearchForm(() => "");
    return api.getMovie().then((res) => {
      if (res) {
        res.data.forEach((card) => {
          card["isLikeCard"] = true;
        }
        );
        const filterdCardsByName = filterFilmsByName(filmName, res.data)
        const filterdCardsByDuration = isShort ? filterShortFilms(filterdCardsByName) : filterdCardsByName
        setSavedCards(() => filterdCardsByDuration)
        setIsNothingFound(() => filterdCardsByDuration.length === 0);
      }
      setIsLoading(() => (false));
    }).catch(err => {
      setTextErrorMessageForSearchForm(() => "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
    }).finally(() => {
      setIsLoading(() => (false));
    });
  }

  // Фильтр поиска фильмов
  function filterFilmsByName(filmName, cards) {
    const filmNameWords = switchToLowerCaseAndreplaceTrailingSpace(filmName).split(" ")
    if (filmNameWords[0] === '*') return cards;

    const filterdCards = cards.filter((card) => {
      const ruWords = switchToLowerCaseAndreplaceTrailingSpace(card.nameRU).split(" ")
      const enWords = switchToLowerCaseAndreplaceTrailingSpace(card.nameEN).split(" ")
      return hasIntersection(filmNameWords, ruWords) || hasIntersection(filmNameWords, enWords)
    })
    return filterdCards;
  }

  // Поиск совпадений в массиве
  function hasIntersection(a, b) {
    const setA = new Set(a);
    return b.filter(value => setA.has(value)).length > 0;
  }

  // Перевод к нижнему регистру и слияние пробелов
  function switchToLowerCaseAndreplaceTrailingSpace(str) {
    return str.toLowerCase().trim().replace(/  +/g, ' ');
  }

  function filterShortFilms(cards) {
    return cards.filter((card) => card.duration <= 40)
  }

  return (
    // Используем провайдер контекста текущего пользователя
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">

          <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<Register onRegister={handleRegister} onFailRegister={handleFailRequest} />} />
            <Route path="/signin" element={<Login onLogin={handleLogin} onFailLogin={handleFailRequest} />} />
            <Route path="*" element={<NotFound />} />

            {/* Защищённый маршруты */}
            <Route path="/movies" element={<ProtectedRoute
              element={Movies}

              isLoading={isLoading}
              isNothingFound={isNothingFound}
              textErrorMessageForSearchForm={textErrorMessageForSearchForm}

              cards={cards}
              handleSaveCard={handleSaveCard}
              handleDeleteCard={handleDeleteCard}
              loggedIn={currentUser.email ?? false}
              onSubmitSearch={handleSearch}
              onErrorSearch={handleFailRequest}
              initSearchName={searchParams.filmName ?? ''}
              initIsShortFilm={searchParams.isShort ?? false}
            />}
            />
            <Route path="/saved-movies" element={<ProtectedRoute
              element={SavedMovies}

              isLoading={isLoading}
              isNothingFound={isNothingFound}
              textErrorMessageForSearchForm={textErrorMessageForSearchForm}

              cards={savedCards}
              handleDeleteCard={handleDeleteCard}
              loggedIn={currentUser.email ?? false}
              onSubmitSearch={handleSearchSavedMovies} />} />
            <Route path="/profile" element={<ProtectedRoute element={Profile} handleSignOut={handleSignOut} loggedIn={currentUser.email ?? false} onUpdateUser={handleUpdateUser} onFailUpdateUser={handleFailRequest} />} />

          </Routes>

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
