import { Link } from 'react-router-dom';

function NavigationRegistered({ iconСlassName }) {
    return (
        <nav className="navigation__registered">
            <Link className="navigation__link-reg" to="/movies">Фильмы</Link>
            <Link className="navigation__link-reg" to="/saved-movies">Сохранённые фильмы</Link>
            <Link className="navigation__button-reg" to="/profile">Аккаунт
                <div className={iconСlassName} />
            </Link>
        </nav>

    );
}

export default NavigationRegistered;