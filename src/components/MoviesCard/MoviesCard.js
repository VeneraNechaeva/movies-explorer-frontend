function MoviesCard({ id, isLikeCard, nameRU, durationHuman, image, handleSaveCard, handleDeleteCard }) {

    function saveCard(e) {
        e.preventDefault();
        handleSaveCard(id);
    }

    function deleteCard(e) {
        e.preventDefault();
        handleDeleteCard(id);
    }


    // Переменные для отображения кнопки
    let buttonClass
    let buttonHandler
    let buttonText

    if (!isLikeCard && handleSaveCard !== undefined) {  //page Movies card not liked
        buttonClass = ""
        buttonHandler = saveCard
        buttonText = "Сохранить"
    } else if (isLikeCard && handleSaveCard !== undefined) { //page Movies card liked
        buttonClass = "card__button_saved"
        buttonHandler = deleteCard
        buttonText = ""
    } else { //page Saved Movies
        buttonClass = "card__button_delete"
        buttonHandler = deleteCard
        buttonText = ""
    }

    return (
        <article className="card">
            <div className="card__text-container">
                <h2 className="card__title">{nameRU}</h2>
                <p className="card__duration">{durationHuman}</p>
            </div>
            <img className="card__image" src={image.fullUrl} alt={nameRU} />
            <button className={`card__button ${buttonClass}`} type="button"
                onClick={buttonHandler}>{buttonText}</button>
        </article >
    )
}

export default MoviesCard;