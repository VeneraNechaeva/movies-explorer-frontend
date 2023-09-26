// import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes, Navigate } from 'react-router-dom';

// Импортируем компоненты приложения, которые используем в Роутах
import Main from '../Main/Main.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import NotFound from '../NotFound/NotFound.js';

// import ProtectedRoute from './ProtectedRoute.js';
// import InfoTooltip from './InfoTooltip.js';

function App() {
  return (
    <div className="page">
      <div className="page__container">

        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />

        </Routes>

      </div></div>
  );
}

export default App;







// // Компоненты, которые пригодятся
// // Удалить потом
// <App>
//   <Register></Register>
//   <Login></Login>
//   <Profile></Profile>
//   <Header ></Header >
//   <Navigation></Navigation>

//   <Main>
//     <Promo></Promo >
//     <NavTab></NavTab>
//     <AboutProject></AboutProject>
//     <Techs></Techs>
//     <AboutMe></AboutMe>
//     <Portfolio></Portfolio>
//   </Main>

//   <Movies>
//     <SearchForm></SearchForm>
//     <FilterCheckbox></FilterCheckbox>
//     <Preloader></Preloader>
//     <MoviesCardList></MoviesCardList>
//     <MoviesCard></MoviesCard>
//   </Movies>

//   <SavedMovies>
//     <MoviesCardList></MoviesCardList>
//     <MoviesCard></MoviesCard>
//   </SavedMovies>

//   <Footer ></Footer >
// </App>