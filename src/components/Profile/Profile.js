import React, { useEffect, useState } from 'react';
import Header from '../Header/Header.js';
import { useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Profile({ handleSignOut, onUpdateUser }) {

    // Стейт с текстом ошибки
    const [textErrorMessage, setTextErrorMessage] = useState();

    // Подписка на контекст
    const currentUser = React.useContext(CurrentUserContext);

    // Запуск валидации
    const { values, handleChange, errors, isValid, resetForm, setValues, setIsValid } = useFormAndValidation();

    // Хук возвращает функцию, которая позволяет рограммно перемещаться
    const navigate = useNavigate();

    // Обработчик 
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name: values.name ?? '',
            email: values.email ?? '',
        });
        setIsValid(() => false);
    }

    // Хук для заполнения полей формы текущими значениями при открытии (после успешной отправки запроса)
    useEffect(() => {
        resetForm();
        setValues({ name: currentUser.name, email: currentUser.email })
    }, []);

    // Выход из профиля
    const signOut = (e) => {
        e.preventDefault();
        resetForm();
        handleSignOut();
        navigate('/', { replace: true });
    }

    // // Обработчик регистрации
    // const onRegister = (e) => {
    //     e.preventDefault();

    //     api.register(values.name, values.email, values.password)
    //         .then((res) => {
    //             try {
    //                 onSuccessRegister(values.email, values.password);
    //             } catch (err) {
    //                 onFailRegister({ body: { error: err } })
    //             }
    //         })
    //         .catch(err => {
    //             err.msg.then(errMsg => {
    //                 console.log('errMsg', errMsg)
    //                 onFailRegister(errMsg, setTextErrorMessage)
    //             }
    //             )
    //         });
    // }

    return (
        <main className="profile">
            <Header />
            <form className="profile__form" name="profile" noValidate="" onSubmit={handleSubmit}>
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>

                <div className="profile__field-conteiner">
                    <div className="profile__field-content">
                        <label className="profile__label" htmlFor="name">Имя</label>
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
                        <label className="profile__label" htmlFor="email">E-mail</label>
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
                    type="submit"
                //  disabled={isValid ? "" : "disabled"}
                > Редактировать</button>

                <button className="profile__button-exit" type="button" onClick={signOut}> Выйти из аккаунта</button>
                {/* <span className={`form__error-server ${values.name || values.email || values.password ? "form__error-server_visible-user" : ""}`}>{errMsg}</span> */}
            </form>
        </main>

    )
}

export default Profile;