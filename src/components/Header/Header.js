import React, { useEffect, useState } from 'react';
import headerLogo from '../../images/Vector-header-logo.svg';
import Navigation from '../Navigation/Navigation.js';
import HamburgerButton from '../HamburgerButton/HamburgerButton.js';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Header({ lightСlassName }) {

    // Стейты для меню навигации
    // Стейт отображения меню
    const [showMenu, setShowMenu] = useState(false);
    // Стейт отображения меню для незалогиненного пользователя
    const [showUnloginMenu, setShowUnloginMenu] = useState(false);
    // Стейт отображения кнопки меню
    const [showHamburgerMenuButton, setShowHamburgerMenuButton] = useState(false);
    // Стейт для проверки была ли кликнута кнопка гамбургер-меню
    const [wasClicked, setWasClicked] = useState(false);


    const currentUser = React.useContext(CurrentUserContext);

    // Метод, который открывает гамбургер-меню
    function handleHamburgerMenuClick() {
        setShowMenu(() => !showMenu);
        setWasClicked(() => !wasClicked);
    }

    // Функция, которая проверяет ширину экрана, меняет стейт отбражения кнопки гамбургер-меню
    useEffect(() => {
        function handleResize() {

            if (currentUser.email && window.innerWidth <= 800) {
                setShowMenu(() => wasClicked)
                setShowUnloginMenu(() => false)
                setShowHamburgerMenuButton(() => true);
            } else if (currentUser.email && window.innerWidth > 800) {
                setShowHamburgerMenuButton(() => false);
                setShowMenu(() => true)
                setShowUnloginMenu(() => true)
            } else {
                setShowMenu(() => false)
                setShowUnloginMenu(() => true)
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [wasClicked]);

    return (
        <header className={` ${lightСlassName ? lightСlassName : "header"}  page__padding-min`}>
            <Link className="header__logo" to="/">
                <img
                    className="header__logo-img"
                    src={headerLogo}
                    alt="сервис Movies" />
            </Link>
            <Navigation showMenu={showMenu} showUnloginMenu={showUnloginMenu} isBurgerMenu={showHamburgerMenuButton}
                iconСlassName={` ${lightСlassName && window.innerWidth > 800 ? "navigation__account-icon navigation__account-icon_light" : "navigation__account-icon"}`} />
            <HamburgerButton isShown={showHamburgerMenuButton} onClick={handleHamburgerMenuClick} wasClicked={wasClicked} />
        </header>
    )
}

export default Header;