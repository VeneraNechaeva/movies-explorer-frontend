import headerLogo from '../images/Vector-header-logo.svg';

function Header() {

return (
    <header className="header page__margin">
        <img
            className="header__logo"
            src={headerLogo}
            alt="сервис Movies"
        />
        <div className="header__tex-conteiner">
            <p className="header__email">Регистрация</p>
        </div>
    </header>
)
}

export default Header;