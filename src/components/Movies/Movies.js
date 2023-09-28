import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function Movies() {
    return (
        <section className="movies-page">
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </section >
    )
}

export default Movies;