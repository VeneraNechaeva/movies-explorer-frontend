import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies() {
    return (
        <section className="saved-movies">
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </section >
    )
}

export default SavedMovies;