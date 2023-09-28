import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({ paddingClassName }) {
    return (
        <section className="movies page__padding">
            <div className={` ${paddingClassName ? paddingClassName : ""}  movies__conteiner`}>

                {/* Временное решение для верстки, потом удалить и переписать */}
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
        </section >
    )
}

export default MoviesCardList;