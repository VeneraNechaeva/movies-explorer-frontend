import React, { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';

function SearchForm({ onSubmit, onError }) {
    const [textErrorMessage, setTextErrorMessage] = useState();

    const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();
    const [isShortFilm, setIsShortFilm] = useState(false);
    // Очистка полей от ошибок
    useEffect(() => {
        resetForm();
    }, []);

    // Функция для сабмита формы 
    const submitSearch = (e) => {
        e.preventDefault();
        if (!values.search) {
            setTextErrorMessage(() => 'Нужно ввести ключевое слово')
        } else {
            setTextErrorMessage(() => '')
            console.log('isShortFilm', isShortFilm)
            onSubmit(values.search, isShortFilm)
                .catch(err => {
                    err.msg.then(errMsg => {
                        onError(errMsg, setTextErrorMessage)
                    })
                });
        }
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
            <span className={`search__error ${textErrorMessage ? "search__error_visible-user" : ""}`}>{textErrorMessage}</span>
            <FilterCheckbox onChange={setIsShortFilm} isShort={isShortFilm}/>
        </form >
    )
}

export default SearchForm;