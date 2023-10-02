import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <Link className="navigation__link" to="/signup">Регистрация</Link>
            <Link className="navigation__button" to="/signin">Войти</Link>
        </nav>
    );
}

export default Navigation;