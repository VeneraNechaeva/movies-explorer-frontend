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
                // value={values.movie ?? ''}
                // onChange={handleChange}
                />
                <button className="search__button" type="submit">Поиск </button>
            </div>

            <FilterCheckbox />
        </form >
    )
}

export default SearchForm;