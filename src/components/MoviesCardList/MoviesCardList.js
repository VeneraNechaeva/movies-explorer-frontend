import MoviesCard from '../MoviesCard/MoviesCard.js';
// import Preloader from '../Preloader/Preloader.js';

function MoviesCardList({ paddingClassName, cards, handleSaveCard, handleDeleteCard }) {
    return (
        <main className="movies page__padding">
            <div className={` ${paddingClassName ? paddingClassName : ""}  movies__conteiner`}>

                {cards.map((card) => <MoviesCard {...card} key={card.id} handleSaveCard={handleSaveCard} handleDeleteCard={handleDeleteCard}/>)}
                {/* <Preloader /> */}
            </div>
        </main >
    )
}

export default MoviesCardList;