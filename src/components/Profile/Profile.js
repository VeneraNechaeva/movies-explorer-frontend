import React, { useEffect } from 'react';
import Header from '../Header/Header.js';
import { useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';

function Profile({ handleSignOut, onSubmit}) {

    // Запуск валидации
    const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

    // Хук возвращает функцию, которая позволяет рограммно перемещаться
    const navigate = useNavigate();

    // Очистка полей от ошибок
    useEffect(() => {
        resetForm();
    }, []);

    // Обработчик авторизации
    const signOut = (e) => {
        e.preventDefault();
        resetForm();
        handleSignOut(e);
        navigate('/', { replace: true });
    }

    return (
        <section className="profile">
            <Header />
            <form className="profile__form" name="profile" noValidate="" onSubmit={onSubmit} isSubmitEnable={isValid}>
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
                            value={values.name ?? ''}
                            onChange={handleChange}
                        />
                        <span className={`profile__error name-error  ${errors?.name ? "profile__error_visible-user" : ""}`}>
                            {errors?.name}</span>
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
                            value={values.email ?? ''}
                            onChange={handleChange}
                        />
                        <span className={`profile__error email-error  ${errors?.email ? "profile__error_visible-user" : ""}`}>
                            {errors?.email}</span>
                    </div>
                </div>

                <button className={`profile__button ${isValid ? "" : "profile__button_disabled"}`}
                    type="submit" disabled={isValid ? "" : "disabled"}> Редактировать</button>

                <button className="profile__button-exit" type="button" onClick={signOut}> Выйти из аккаунта</button>
            </form>
        </section>

    )
}

export default Profile;