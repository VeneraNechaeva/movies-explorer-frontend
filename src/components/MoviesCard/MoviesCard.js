import filmOne from '../../images/Film.jpg';

function MoviesCard() {
    return (
        <article className="card">
            <div className="card__text-container">
                <h2 className="card__title">В погоне за Бенкси</h2>
                <p className="card__duration">0ч 42м</p>
            </div>
            <img className="card__image" src={filmOne} alt="«Роллинг Стоунз» в изгнании" />
            <button className="card__button">Сохранить</button>


            {/* <button className="card__button card__button_deletes"></button> */}
            {/* <button className="card__button card__button_saved"></button> */}


            {/* <button className="card__button_saved"/> */}
            {/* <button className="card__button_delete"/> */}
        </article >
    )
}

export default MoviesCard;