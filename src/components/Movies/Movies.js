import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import MoreButton from '../MoreButton/MoreButton.js';

function Movies() {
    return (
        <section className="movies-page">
            <Header />
            <SearchForm />
            <MoviesCardList paddingClassName={"movies__padding-min"}/>
            <MoreButton />
            <Footer />
        </section >
    )
}

export default Movies;