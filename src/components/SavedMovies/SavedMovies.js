import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';

function SavedMovies() {
    return (
        <section className="saved-movies">
            <Header />
            <SearchForm />
            <article className="saved">

            </article>
            <Footer />
        </section >
    )
}

export default SavedMovies;