import headerLogo from '../../images/Vector-header-logo.svg';
import Navigation from '../Navigation/Navigation.js';
import NavigationRegistered from '../NavigationRegistered/NavigationRegistered.js';
import { Link } from 'react-router-dom';

function Header({ lightСlassName }) {
    return (
        <header className={` ${lightСlassName ? lightСlassName : "header"}  page__padding-min`}>
            <Link className="header__logo" to="/">
                <img
                    className="header__logo-img"
                    src={headerLogo}
                    alt="сервис Movies" />
            </Link>

            <Navigation />
            <NavigationRegistered iconСlassName={` ${lightСlassName ? "navigation__account-icon_light" : "navigation__account-icon"}`} />
        </header>
    )
}

export default Header;