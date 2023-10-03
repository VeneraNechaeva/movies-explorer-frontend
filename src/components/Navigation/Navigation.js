import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ iconСlassName, showMenu, showUnloginMenu }) {
    if (showMenu) {
        return (
            <nav className="navigation__registered">
                <ul className="navigation__list-reg">
                    <li className="navigation__item-min"><Link className="navigation__link-reg-min" to="/">Главная</Link></li>
                    <li className="navigation__item"><Link className="navigation__link-reg navigation__link-reg_active" to="/movies">Фильмы</Link></li>
                    <li className="navigation__item"><Link className="navigation__link-reg" to="/saved-movies">Сохранённые фильмы</Link></li>
                    <li className="navigation__item"><Link className="navigation__button-reg" to="/profile">Аккаунт
                        <div className={iconСlassName} />
                    </Link></li>
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