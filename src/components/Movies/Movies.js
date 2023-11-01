import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import MoreButton from '../MoreButton/MoreButton.js';
import {
    CARDS_SCREEN_WIDTH_BIG, 
    CARDS_COUNT_INCREMENT_BIG, 
    CARDS_COUNT_INITIAL_BIG, 
    CARDS_SCREEN_WIDTH_MEDIUM,
    CARDS_COUNT_INCREMENT_MEDIUM,
    CARDS_COUNT_INITIAL_MEDIUM,
    CARDS_COUNT_INCREMENT_SMALL,
    CARDS_COUNT_INITIAL_SMALL
} from '../../utils/const.js'

function Movies({ 
    cards, 
    handleSaveCard, 
    handleDeleteCard, 
    onSubmitSearch, 
    onErrorSearch, 
    initSearchName,
    initIsShortFilm, 
    isLoading, 
    isNothingFound, 
    textErrorMessageForSearchForm, 
    isInitLoadDone }) {

    const [cardsCountIncrement, setCardsCountIncrement] = useState(0);
    const [initCardsCount, setInitCardsCount] = useState(0);
    const [clicksMoreButtonCount, setClicksMoreButtonCount] = useState(0);
    const [cardsForShow, setCardsForShow] = useState([]);
    const [visibleMoreButton, setVisibleMoreButton] = useState(false);

    useEffect(() => {
        setClicksMoreButtonCount(() => 0);
    }, [cards])

    useEffect(() => {
        let numCards = 0;
        if (cardsForShow.length === 0 || clicksMoreButtonCount === 0) {
            numCards = initCardsCount;
        } else {
            numCards = initCardsCount + cardsCountIncrement * clicksMoreButtonCount;
        }
       
        setCardsForShow((state) => (cards.slice(0, numCards)));
        setVisibleMoreButton(numCards < cards.length);
    }, [cards, cardsCountIncrement, clicksMoreButtonCount, initCardsCount])

    useEffect(() => {
        function handleResize() { 
            if (window.innerWidth >= CARDS_SCREEN_WIDTH_BIG) {
                setCardsCountIncrement(() => CARDS_COUNT_INCREMENT_BIG)
                setInitCardsCount(() => CARDS_COUNT_INITIAL_BIG)
            } else if (window.innerWidth >= CARDS_SCREEN_WIDTH_MEDIUM) {
                setCardsCountIncrement(() => CARDS_COUNT_INCREMENT_MEDIUM)
                setInitCardsCount(() => CARDS_COUNT_INITIAL_MEDIUM)
            } else {
                setCardsCountIncrement(() => CARDS_COUNT_INCREMENT_SMALL)
                setInitCardsCount(() => CARDS_COUNT_INITIAL_SMALL)
            }

        }

        const timer = setInterval(() => {
            handleResize()
        }, 1000);
        handleResize()
        return () => clearInterval(timer);
      });

    function handleMoreButtonClick() {
        setClicksMoreButtonCount((state) => (state + 1))
    }

    return (
        <section className="movies-page">
            <Header />
            <SearchForm 
            isInitLoadDone={isInitLoadDone} 
            onSubmit={onSubmitSearch} 
            onError={onErrorSearch} 
            initSearchName={initSearchName} 
            initIsShortFilm={initIsShortFilm}
            allowChecboxOnEmptySearchInput={false} />

            <MoviesCardList paddingClassName={"movies__padding-min"} cards={cardsForShow} handleSaveCard={handleSaveCard}
                handleDeleteCard={handleDeleteCard} isLoading={isLoading} isNothingFound={isNothingFound}
                textErrorMessageForSearchForm={textErrorMessageForSearchForm} />

            <MoreButton isVisible={visibleMoreButton} onClick={handleMoreButtonClick} />
            <Footer />
        </section >
    )
}

export default Movies;