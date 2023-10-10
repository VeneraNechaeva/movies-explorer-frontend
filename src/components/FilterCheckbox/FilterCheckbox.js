function FilterCheckbox({ onChange, isShort }) {

    const handleChange = (e) => {
        onChange((state) => !state)
    }

    return (
        <div className="checkbox">
            <input className="checkbox__switch"
                checked={isShort}
                type="checkbox"
                id="switch"
                name="switch"
                onChange={handleChange} />
            <label className="checkbox__text" htmlFor="switch">Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox;