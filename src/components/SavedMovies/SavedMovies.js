import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies({ cards, handleDeleteCard, onSubmitSearch }) {
    return (
        <section className="saved-movies">
            <Header />
            <SearchForm onSubmit={onSubmitSearch}  initSearchName={''} initIsShortFilm={false}  />
            <MoviesCardList cards={cards} paddingClassName={"movies__padding-max"} handleDeleteCard={handleDeleteCard} />
            <Footer />
        </section >
    )
}

export default SavedMovies;