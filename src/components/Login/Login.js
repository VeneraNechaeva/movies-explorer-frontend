import React, { useEffect, useState } from 'react';
import UserForm from '../UserForm/UserForm.js';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';
import { isValidEmail } from '../../utils/validation.js';
import { VALIDATION_EMAIL_MSG } from '../../utils/const.js'

function Login({ onLogin, onFailLogin }) {
    // Стейт с текстом ошибки
    const [textErrorMessage, setTextErrorMessage] = useState("");
    // Запуск валидации
    const { values, handleChange, errors, isValid, resetForm } =
        useFormAndValidation(
            {
                email: {
                    func: isValidEmail,
                    errMsg: VALIDATION_EMAIL_MSG
                }
            });

    // Очистка полей от ошибок
    useEffect(() => {
        resetForm();
    }, []);

    // Функция для сабмита формы авторизации
    const submitLogin = (e) => {
        e.preventDefault();
        onLogin(values.email, values.password)
            .catch(errMsg => {
                onFailLogin(errMsg, setTextErrorMessage)
            });
    }

    return (
        <UserForm name="login" title="Рады видеть!" buttonText="Войти"
            text="Ещё не зарегистрированы?" textLink="Регистрация" redirect="/signup"
            onSubmit={submitLogin} isSubmitEnable={isValid}
        >
            <div className="form__field-conteiner-log">

                <div className="form__field-content">
                    <label className="form__label" htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        className={`form__field  ${errors?.email ? "form__field_error" : ""}`}
                        type="email"
                        name="email"
                        minLength={2}
                        maxLength={40}
                        required
                        value={values.email ?? ''}
                        onChange={handleChange}
                        placeholder="E-mail"
                    />
                    <span className={`form__error email-error  ${errors?.email ? "form__error_visible-user" : ""}`}>
                        {errors?.email}</span>
                </div>

                <div className="form__field-content">
                    <label className="form__label" htmlFor="password">Пароль</label>
                    <input
                        id="password"
                        className={`form__field  ${errors?.password ? "form__field_error" : ""}`}
                        type="password"
                        name="password"
                        minLength={10}
                        maxLength={14}
                        required
                        value={values.password ?? ''}
                        onChange={handleChange}
                        placeholder="Пароль"
                    />
                    <span className={`form__error password-error  ${errors?.password ? "form__error_visible-user" : ""}`}>
                        {errors?.password}</span>
                </div>
            </div>
            <span className={`form__error-server ${textErrorMessage ? "form__error-server_visible-user" : ""}`}>{textErrorMessage}</span>
        </UserForm>
    )
}

export default Login;