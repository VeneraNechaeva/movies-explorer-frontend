import React, { useState } from 'react';

function FilterCheckbox({ enabled, onChange, initIsShortFilm }) {

    const callOnChange = (e) => {
        if (enabled) {
            onChange(e);
        }
    }

    return (
        <div className="checkbox">
            <input className="checkbox__switch"
                checked={initIsShortFilm}
                type="checkbox"
                id="switch"
                name="switch"
                onChange={callOnChange} />
            <label className="checkbox__text" htmlFor="switch">Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox;