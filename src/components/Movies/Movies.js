import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import MoreButton from '../MoreButton/MoreButton.js';

function Movies({ cards, handleSaveCard, handleDeleteCard, onSubmitSearch, onErrorSearch, initSearchName,
    initIsShortFilm, isLoading, isNothingFound, textErrorMessageForSearchForm }) {

    const [cardsCountIncrement, setCardsCountIncrement] = useState(0);
    const [initCardsCount, setInitCardsCount] = useState(0);
    const [clicksMoreButtonCount, setClicksMoreButtonCount] = useState(1);
    const [cardsForShow, setCardsForShow] = useState([]);
    const [visibleMoreButton, setVisibleMoreButton] = useState(false);

    useEffect(() => {
        setClicksMoreButtonCount(() => 1);
    }, [cards])

    useEffect(() => {
        let numCards = 0;
        if (cardsForShow.length === 0) {
            numCards = initCardsCount;
        } else {
            numCards = cardsCountIncrement * clicksMoreButtonCount;
        }
        // console.log('numCards', numCards)
        setCardsForShow((state) => (cards.slice(0, numCards)));
        setVisibleMoreButton(numCards < cards.length);
    }, [cards, cardsCountIncrement, clicksMoreButtonCount])

    useEffect(() => {
        function handleResize() {
            // console.log('window.innerWidth', window.innerWidth)
            if (window.innerWidth >= 1280) {
                setCardsCountIncrement(() => 3)
                setInitCardsCount(() => 12)
            } else if (window.innerWidth >= 768) {
                setCardsCountIncrement(() => 2)
                setInitCardsCount(() => 8)
            } else {
                setCardsCountIncrement(() => 2)
                setInitCardsCount(() => 5)
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleMoreButtonClick() {
        setClicksMoreButtonCount((state) => (state + 1))
    }

    return (
        <section className="movies-page">
            <Header />
            <SearchForm onSubmit={onSubmitSearch} onError={onErrorSearch} initSearchName={initSearchName} initIsShortFilm={initIsShortFilm} />

            <MoviesCardList paddingClassName={"movies__padding-min"} cards={cardsForShow} handleSaveCard={handleSaveCard}
                handleDeleteCard={handleDeleteCard} isLoading={isLoading} isNothingFound={isNothingFound}
                textErrorMessageForSearchForm={textErrorMessageForSearchForm} />

            <MoreButton isVisible={visibleMoreButton} onClick={handleMoreButtonClick} />
            <Footer />
        </section >
    )
}

export default Movies;