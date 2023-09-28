import headerLogo from '../../images/Vector-header-logo.svg';
import { Link } from 'react-router-dom';

function UserForm( {name, title, buttonText, children, text, textLink, redirect, onSubmit, isSubmitEnable} ) {
    return (
        <form className="form" name={name} noValidate="" onSubmit={onSubmit}>
            <div className="form__content">
            <img
                className="form__logo"
                src={headerLogo}
                alt="сервис Movies"
            />
            <h2 className="form__title">{title}</h2>
            {children}
            <button className={`form__button ${isSubmitEnable ? "" : "form__button_disabled"}`}
                type="submit" disabled={isSubmitEnable ? "" : "disabled"}>
                {buttonText}
            </button>
            <p className="form__text">{text}
                <Link className="form__link" to={redirect} >{textLink}</Link>
            </p>
            </div>
        </form>
    );
}

export default UserForm;