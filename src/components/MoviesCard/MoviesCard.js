function MoviesCard({ id, isLikeCard, nameRU, durationHuman, image, handleSaveCard, handleDeleteCard }) {

    function savedCard(e) {
        e.preventDefault();
        handleSaveCard(id);
    }

    function deletedCard(e) {
        e.preventDefault();
        handleDeleteCard(id);
    }


    // Переменные для отображения кнопки
    let buttonClass
    let buttonHandler
    let buttonText

    if (!isLikeCard && handleSaveCard !== undefined) {  //page Movies card not liked
        buttonClass = ""
        buttonHandler = savedCard
        buttonText = "Сохранить"
    } else if (isLikeCard && handleSaveCard !== undefined) { //page Movies card liked
        buttonClass = "card__button_saved"
        buttonHandler = deletedCard
        buttonText = " "
    } else { //page Saved Movies
        buttonClass = "card__button_delete"
        buttonHandler = deletedCard
        buttonText = " "
    }

    return (
        <article className="card">
            <div className="card__text-container">
                <h2 className="card__title">{nameRU}</h2>
                <p className="card__duration">{durationHuman}</p>
            </div>
            <img className="card__image" src={image.fullUrl} alt={nameRU} />
            <button className={`${buttonClass} card__button`} type="button"
                onClick={buttonHandler}>{buttonText}</button>
        </article >
    )
}

export default MoviesCard;