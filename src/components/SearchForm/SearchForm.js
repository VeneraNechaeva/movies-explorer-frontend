import React, { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';

function SearchForm({ isInitLoadDone, onSubmit, initSearchName, initIsShortFilm, allowChecboxOnEmptySearchInput }) {
    // Стейт с текстом ошибки
    const [textErrorMessage, setTextErrorMessage] = useState();

    // Запуск валидации
    const { values, handleChange, setValues } = useFormAndValidation();

    const [isShortFilm, setIsShortFilm] = useState(initIsShortFilm);

    const [wasClickedSearch, setWasClickedSearch] = useState(false);

    useEffect(() => {
        setIsShortFilm(() => initIsShortFilm);
    }, [initIsShortFilm]);

    useEffect(() => {
        setValues({ ...values, search: initSearchName });
    }, [initSearchName]);

    useEffect(() => {
        if (values.search === "" && isInitLoadDone && wasClickedSearch) {
            onSubmit("", isShortFilm, true)
        }
    }, [values]);


    useEffect(() => {
        if (values.search !== "" && values.search !==undefined) {
            submitSearch();
        } else if (allowChecboxOnEmptySearchInput) {
            onSubmit("", isShortFilm, true)
        }
    }, [isShortFilm]);

    // Функция для сабмита формы 
    const submitSearch = ((e) => {
        setWasClickedSearch(() => (true));
        if (e !== undefined)
            e.preventDefault();
        if (values.search === "") {
            setTextErrorMessage(() => 'Нужно ввести ключевое слово')
        } else {
            setTextErrorMessage(() => '')
            onSubmit(values.search, isShortFilm, false)
        }
    })

    const changeShortFilmChekbox = (e) => {
        setIsShortFilm((state) => !state)
    }

    return (
        <form className="search page__padding-min" onSubmit={submitSearch}>
            <div className="search__label">
                <input
                    id="search"
                    className="search__field"
                    type="text"
                    name="search"
                    placeholder="Фильм"
                    value={values.search ?? ''}
                    onChange={handleChange}
                />
                <button
                    className="search__button" type="submit">Поиск </button>
            </div>
            <span className={`search__error ${textErrorMessage !== "" ? "search__error_visible-user" : ""}`}>{textErrorMessage}</span>
            <FilterCheckbox enabled={(allowChecboxOnEmptySearchInput) || (values.search ?? false)} onChange={changeShortFilmChekbox} initIsShortFilm={isShortFilm} />
        </form >
    )
}

export default SearchForm;