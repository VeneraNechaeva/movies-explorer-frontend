import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies() {
    return (
        <section className="saved-movies">
            <Header />
            <SearchForm />
            <MoviesCardList buttonClassName={"card__button_deletes"} paddingClassName={"movies__padding-max"}/>
            <Footer />
        </section >
    )
}

export default SavedMovies;