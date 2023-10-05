import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ iconСlassName, showMenu, showUnloginMenu, isBurgerMenu }) {



    if (showMenu) {
        return (
            <nav className="navigation__registered">
                <ul className="navigation__list-reg">
                    <li className="navigation__item-min"><NavLink className={({isActive}) => `${isActive && isBurgerMenu ? "navigation__link-reg_active" : "navigation__link-reg"}`} to="/">Главная</NavLink></li>
                    <li className="navigation__item"><NavLink className={({isActive}) => `${isActive && isBurgerMenu ? "navigation__link-reg_active" : "navigation__link-reg"}`} to="/movies">Фильмы</NavLink></li>
                    <li className="navigation__item"><NavLink className={({isActive}) => `${isActive && isBurgerMenu ? "navigation__link-reg_active" : "navigation__link-reg"}`} to="/saved-movies">Сохранённые фильмы</NavLink></li>
                    <li className="navigation__item-button"><NavLink className={({isActive}) => `${isActive && isBurgerMenu ? "navigation__button-reg_active" : "navigation__button-reg"}`} to="/profile">Аккаунт
                        <div className={iconСlassName} />
                    </NavLink></li>
                </ul>
            </nav>
        );
    } else if (showUnloginMenu) {
        return (
            <nav className="navigation__unregistered">
                <ul className="navigation__list">
                    <li className="navigation__item-unregistered"><Link className="navigation__link" to="/signup">Регистрация</Link></li>
                    <li className="navigation__item-unregistered"><Link className="navigation__button" to="/signin">Войти</Link></li>
                </ul>
            </nav>
        );
    }
}
export default Navigation;