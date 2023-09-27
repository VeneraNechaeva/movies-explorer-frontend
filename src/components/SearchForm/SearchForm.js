import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm() {
    return (
        <form className="search page__padding-min">
            <div className="search__label">
                <input
                    id="search"
                    className="search__field"
                    type="text"
                    name="search"
                    placeholder="Фильм"
                    required
                // value={values.place ?? ''}
                // onChange={handleChange}
                />
                <button className="search__button" type="submit">Поиск </button>
            </div>

<FilterCheckbox></FilterCheckbox>

            {/* <div className="search__switch-container">
                <input className="search__switch" type="checkbox" id="switch" name="switch" />
                <label className="search__text" for="switch">Короткометражки</label>
            </div> */}
        </form >
    )
}

export default SearchForm;