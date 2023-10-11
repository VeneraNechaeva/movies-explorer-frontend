import MoviesCard from '../MoviesCard/MoviesCard.js';
// import Preloader from '../Preloader/Preloader.js';

function MoviesCardList({ paddingClassName, cards, handleSaveCard, handleDeleteCard }) {
    return (
        <section className="movies page__padding">
            <div className={` ${paddingClassName ? paddingClassName : ""}  movies__conteiner`}>

                {cards.map((card) => <MoviesCard {...card} key={card.movieId} handleSaveCard={handleSaveCard} handleDeleteCard={handleDeleteCard} />)}
                {/* <Preloader /> */}
                {/* <p className="movies_text">Ничего не найдено</p> */}
                {/* <span className="movies__error-server">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
                    Подождите немного и попробуйте ещё раз</span> */}
            </div>
        </section >
    )
}

export default MoviesCardList;