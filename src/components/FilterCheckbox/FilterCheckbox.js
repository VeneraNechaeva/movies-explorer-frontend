function FilterCheckbox() {
    return (
        <div className="checkbox">
            <input className="checkbox__switch" type="checkbox" id="switch" name="switch" />
            <label className="checkbox__text" for="switch">Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox;