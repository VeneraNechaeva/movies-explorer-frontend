import React, { useState } from 'react';

function HamburgerButton( { isShown, onClick, wasClicked }) {

    // Создаём переменную, которую после зададим в `className` для кнопки гамбургер-меню
    const menuButtonClassName = (
        `header__button-menu ${wasClicked && "header__button-menu_close"}`
    );

    function click(evt) {
        onClick(evt);
    }
    
    if (isShown) {
        return (
            <button className={menuButtonClassName} type="button" onClick={click}></button>
        )
    }
}

export default HamburgerButton;