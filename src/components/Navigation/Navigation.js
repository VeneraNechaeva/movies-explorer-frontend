import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <section className="navigation">

            {/* <nav className="navigation__unregistered">
                <Link className="navigation__link" to="/signup">Регистрация</Link>
                <Link className="navigation__button" to="/signin">Войти</Link>
            </nav> */}

            <nav className="navigation__registered">
                <Link className="navigation__link-reg" to="/movies">Фильмы</Link>
                <Link className="navigation__link-reg" to="/saved-movies">Сохранённые фильмы</Link>
                <Link className="navigation__button-reg" to="/profile">Аккаунт
                    <div className="navigation__account-logo" />
                </Link>
            </nav>

        </section>

    );
}

export default Navigation;