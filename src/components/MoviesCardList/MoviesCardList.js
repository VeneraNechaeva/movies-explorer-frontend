import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader.js';

function MoviesCardList({ paddingClassName, cards, handleSaveCard, handleDeleteCard, isLoading, isNothingFound,
    textErrorMessageForSearchForm }) {

    return (
        <section className="movies page__padding">
            <div className={` ${paddingClassName ? paddingClassName : ""}  movies__conteiner`}>

                {cards.map((card) => <MoviesCard {...card} key={card.movieId} handleSaveCard={handleSaveCard} handleDeleteCard={handleDeleteCard} />)}

                <Preloader className={`preloader ${isLoading ? "preloader_visible" : ""}`} />

                <p className={`movies__text ${isNothingFound ? "movies__text_visible" : ""}`}>Ничего не найдено</p>
                <span className={`movies__error-server ${textErrorMessageForSearchForm ? "movies__error-server_visible-user" : ""}`}>
                    {textErrorMessageForSearchForm}</span>
            </div>
        </section >
    )
}

export default MoviesCardList;