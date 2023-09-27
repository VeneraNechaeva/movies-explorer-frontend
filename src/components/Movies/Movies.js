import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Movies() {
    return (
        <section className="movies-page">
            <Header />
            <SearchForm />
            <article className="movies">

            </article>
            <Footer />
        </section >
    )
}

export default Movies;