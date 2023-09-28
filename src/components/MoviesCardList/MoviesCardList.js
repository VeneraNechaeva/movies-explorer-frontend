import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList() {
    return (
        <section className="movies page__padding">
            <div className="movies-conteiner">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <button className="movies__button">Ещё</button>
        </section >
    )
}

export default MoviesCardList;