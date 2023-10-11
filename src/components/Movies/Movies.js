import React, { useState } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import MoreButton from '../MoreButton/MoreButton.js';

function Movies({ cards, handleSaveCard, handleDeleteCard, onSubmitSearch, onErrorSearch, initSearchName,
    initIsShortFilm, isLoading, isNothingFound, textErrorMessageForSearchForm }) {

    return (
        <section className="movies-page">
            <Header />
            <SearchForm onSubmit={onSubmitSearch} onError={onErrorSearch} initSearchName={initSearchName} initIsShortFilm={initIsShortFilm} />

            <MoviesCardList paddingClassName={"movies__padding-min"} cards={cards} handleSaveCard={handleSaveCard}
                handleDeleteCard={handleDeleteCard} isLoading={isLoading} isNothingFound={isNothingFound}
                textErrorMessageForSearchForm={textErrorMessageForSearchForm} />

            <MoreButton />
            <Footer />
        </section >
    )
}

export default Movies;