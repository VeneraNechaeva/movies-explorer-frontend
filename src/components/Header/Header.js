import headerLogo from '../../images/Vector-header-logo.svg';
import Navigation from '../Navigation/Navigation.js';
import { Link } from 'react-router-dom';

function Header({ className }) {
    return (
        <header className={` ${className ? className : "header"}  page__padding-min`}>
            <Link className="header__logo" to="/">
                <img
                    className="header__logo-img"
                    src={headerLogo}
                    alt="сервис Movies" />
            </Link>
            <Navigation />
        </header>
    )
}

export default Header;