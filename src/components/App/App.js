import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
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
import Popup from '../Popup/Popup';
import { concatUrl, filterFilmsByName, filterShortFilms } from '../../utils/utils.js';
import { ERR_MSG_SEARCH_FORM } from '../../utils/const';
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
  const [searchParams, setSearchParams] = useState({});

  const [isFirstSearch, setIsFirstSearch] = useState(true);
  const [allCards, setAllCards] = useState([]);
  const [allSavedCards, setAllSavedCards] = useState([]);

  const [isInitLoadDone, setIsInitLoadDone] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate();

  // Эффект при монтровании, который проверяет токен
  useEffect(() => {
    getUserInfo();
  }, [])

  const location = useLocation();

  // Функция получает информацию о пользователе из куки
  const getUserInfo = () => {
    api.getUserInformation().then((res) => {
      if (res) {
        // авторизуем пользователя
        setCurrentUser(() => res);

        api.getMovie()
          .then((movies) => {
            if ("searchResult" in localStorage) {
              const searchResult = JSON.parse(localStorage.getItem("searchResult"));
              const storageMovies = searchResult['filterdCardsByDuration'];

              storageMovies.forEach((card) => {
                const myCard = movies.data.find((savedCard) => savedCard.movieId === card["movieId"]);
                card["isLikeCard"] = myCard !== undefined;
              });

              setCards(() => storageMovies);
              setSearchParams(() => searchResult);
            }

            setIsInitLoadDone(() => true)
            setSavedCards(() => movies.data);
            setAllSavedCards(() => movies.data);

            if (location.pathname === "/signin" || location.pathname === "/signup") {
              navigate("/movies", { replace: true });
            } else {
              navigate(location.pathname, { replace: true });
            }
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
    }).catch(err => {
      return err.msg.then(errMsg => {
        return Promise.reject(errMsg);
      })
    });
  }

  // Обработчик регистрации
  function handleRegister(name, email, password) {
    return api.register(name, email, password).then((res) => {
      if (res) {
        handleLogin(email, password);
      }
    }).catch(err => {
      return err.msg.then(errMsg => {
        return Promise.reject(errMsg);
      })
    });
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

  // Обработчик для попапа успешного редактирования профиля
  function handleSuccessEditProfile() {
    setIsPopupOpen(() => true);
  }

  // Закрытие попапа
  function closePopup() {
    setIsPopupOpen(() => (false));

  }

  // Обработчик выхода пользователя из профиля
  function handleSignOut() {
    api.signOut().then((res) => {
      if (res) {
        localStorage.removeItem('searchResult');
        setCards(() => ([]));
        setSavedCards(() => ([]));
        setSearchParams(() => ({}));
        setCurrentUser(() => ({}));
        setAllCards(() => ([]));
        setIsFirstSearch(() => (true));
        setIsInitLoadDone(() => (false));
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
        setAllSavedCards((state) => ([res.data, ...state]));
      }
    }).catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  // Обработчик удаления фильма
  function handleDeleteCard(id, _id) {
    const unlikedCard = cards.find((card) => card.id === id)

    api.deletMovie(_id).then((res) => {
      if (res) {
        if (unlikedCard !== undefined)
          unlikedCard['isLikeCard'] = false

        setSavedCards((state) => state.filter(card => card._id !== _id));
        setAllSavedCards((state) => state.filter(card => card._id !== _id));
      }
    }).catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }

  // Обработчик поиска фильмов в Movies
  function handleSearch(filmName, isShort, showAll) {
    setIsLoading(() => (true));
    setIsNothingFound(() => (false));
    setTextErrorMessageForSearchForm(() => "");
    setCards(() => ([]));

    let moviesSource;
    if (isFirstSearch) {
      moviesSource = apiMovies.getFilms();
    } else {
      moviesSource = Promise.resolve(allCards);
    }
    return moviesSource.then((res) => {
      if (res) {

        let filterdCardsByDuration = [];
        if (isFirstSearch) {
          res.forEach((card) => {
            card["thumbnail"] = concatUrl(card["image"]["formats"]["thumbnail"]["url"]);
            card["image"] = concatUrl(card["image"]["url"]);
            card["movieId"] = card["id"];
            const myCard = savedCards.find((savedCard) => savedCard.movieId === card["movieId"]);
            card["isLikeCard"] = myCard !== undefined;
            card["_id"] = myCard !== undefined ? myCard["_id"] : null;
          });
          setAllCards(() => res);
          filterdCardsByDuration = res;
        }
        const filterdCardsByName = filterFilmsByName(filmName, res, showAll)
        filterdCardsByDuration = isShort ? filterShortFilms(filterdCardsByName) : filterdCardsByName

        localStorage.setItem('searchResult',
          JSON.stringify({
            filterdCardsByDuration,
            filmName,
            isShort
          }));

        setSearchParams(() => JSON.parse(localStorage.getItem("searchResult")));

        setCards(() => filterdCardsByDuration)
        setIsNothingFound(() => filterdCardsByDuration.length === 0);
        setIsFirstSearch(() => false);
      }
    }).catch(err => {
      setTextErrorMessageForSearchForm(() => ERR_MSG_SEARCH_FORM);
    }).finally(() => {
      setIsLoading(() => (false));
    });

  }

  // Обработчик поиска фильмов в SavedMovies
  function handleSearchSavedMovies(filmName, isShort, showAll) {
    setIsLoading(() => (true));
    setIsNothingFound(() => (false));
    setTextErrorMessageForSearchForm(() => "");
    return Promise.resolve(allSavedCards).then((res) => {
      if (res) {
        res.forEach((card) => {
          card["isLikeCard"] = true;
        }
        );
        const filterdCardsByName = filterFilmsByName(filmName, res, showAll)
        const filterdCardsByDuration = isShort ? filterShortFilms(filterdCardsByName) : filterdCardsByName

        setSavedCards(() => filterdCardsByDuration)
        setIsNothingFound(() => filterdCardsByDuration.length === 0);
      }
      setIsLoading(() => (false));
    }).catch(err => {
      setTextErrorMessageForSearchForm(() => ERR_MSG_SEARCH_FORM);
    }).finally(() => {
      setIsLoading(() => (false));
    });
  }

  return (
    // Используем провайдер контекста текущего пользователя
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">

          <Popup isOpen={isPopupOpen} onClose={closePopup} />

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
              isInitLoadDone={isInitLoadDone}
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
              onSubmitSearch={handleSearchSavedMovies}
              initSearchName={''}
              initIsShortFilm={false}
              isInitLoadDone={isInitLoadDone} />} />
            <Route path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  handleSignOut={handleSignOut}
                  loggedIn={currentUser.email ?? false}
                  onUpdateUser={handleUpdateUser}
                  onFailUpdateUser={handleFailRequest}
                  isInitLoadDone={isInitLoadDone}

                  onSuccessUpdateUserPopup={handleSuccessEditProfile}
                />
              } />

          </Routes>

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
