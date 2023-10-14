import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies({
    cards,
    handleDeleteCard,
    onSubmitSearch,
    isLoading,
    isNothingFound,
    textErrorMessageForSearchForm,
    initSearchName,
    initIsShortFilm,
    isInitLoadDone }) {

    return (
        <section className="saved-movies">
            <Header />
            <SearchForm
                onSubmit={onSubmitSearch}
                initSearchName={initSearchName}
                initIsShortFilm={initIsShortFilm}
                isInitLoadDone={isInitLoadDone}
                allowChecboxOnEmptySearchInput={true} />

            <MoviesCardList cards={cards} paddingClassName={"movies__padding-max"} handleDeleteCard={handleDeleteCard}
                isLoading={isLoading} isNothingFound={isNothingFound} textErrorMessageForSearchForm={textErrorMessageForSearchForm} />

            <Footer />
        </section >
    )
}

export default SavedMovies;