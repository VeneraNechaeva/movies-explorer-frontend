import headerLogo from '../Vector-header-logo.svg';
import { Link } from 'react-router-dom';

function Header( { className } ) {

    return (
        <header className={` ${className ? className : "header"}  page__padding-min`}>
            <img
                className="header__logo"
                src={headerLogo}
                alt="сервис Movies"
            />
            <div className="header__tex-conteiner">
                <Link className="header__link" to="/signup">Регистрация</Link>
                <Link className="header__button" to="/signin">Войти</Link>
            </div>
        </header>
    )
}

export default Header;