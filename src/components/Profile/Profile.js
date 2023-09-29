import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';

function Profile({ onSubmit, isSubmitEnable }) {
    return (
        <section className="profile">
            <Header />
            <form className="profile__form" name="profile" noValidate="" onSubmit={onSubmit}>
                <h2 className="profile__title">Привет, Виталий!</h2>

                <div className="profile__field-conteiner">
                    <div className="profile__field-content">
                        <label className="profile__label" for="name">Имя</label>
                        <input
                            id="name"
                            className="profile__field"
                            type="text"
                            name="name"
                            minLength={2}
                            maxLength={40}
                            required
                        // value={values.name ?? ''}
                        // onChange={handleChange}
                        />
                        {/* <span className={`form__error email-error  ${errors?.email ? "form__error_visible-user" : ""}`}>
                    {errors?.email}</span> */}
                    </div>

                    <div className="profile__field-content">
                        <label className="profile__label" for="email">E-mail</label>
                        <input
                            id="email"
                            className="profile__field"
                            type="email"
                            name="email"
                            minLength={2}
                            maxLength={40}
                            required
                        // value={values.email ?? ''}
                        // onChange={handleChange}
                        />
                        {/* <span className={`form__error email-error  ${errors?.email ? "form__error_visible-user" : ""}`}>
                    {errors?.email}</span> */}
                    </div>
                </div>

                <button className={`profile__button ${isSubmitEnable ? "" : "profile__button_disabled"}`}
                    type="submit" disabled={isSubmitEnable ? "" : "disabled"}> Редактировать</button>
                <Link className="profile__link" to="/" >Выйти из аккаунта</Link>
            </form>
        </section>

    )
}

export default Profile;