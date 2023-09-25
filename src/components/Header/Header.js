import headerLogo from '../Vector-header-logo.svg';

function Header() {

return (
    <header className="header page__padding-min">
        <img
            className="header__logo"
            src={headerLogo}
            alt="сервис Movies"
        />
        <div className="header__tex-conteiner">
            <p className="header__link">Регистрация</p>
            <button className="header__button">Войти</button>
        </div>
    </header>
)
}

export default Header;