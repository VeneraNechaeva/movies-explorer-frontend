import Header from './Header.js';
import Main from './Main.js';

import Footer from './Footer.js';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />

        <Main />

        <Footer ></Footer >
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