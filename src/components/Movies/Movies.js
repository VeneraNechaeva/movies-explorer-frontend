import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchString from '../SearchString/SearchString.js';

function Movies() {
    return (
        <section className="movies-page">
            <Header />
            <SearchString />
            <article className="movies">

            </article>
            <Footer />
        </section >
    )
}

export default Movies;