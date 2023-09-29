import MoviesCard from '../MoviesCard/MoviesCard.js';
// import Preloader from '../Preloader/Preloader.js';

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
                {/* <Preloader /> */}
            </div>
        </section >
    )
}

export default MoviesCardList;