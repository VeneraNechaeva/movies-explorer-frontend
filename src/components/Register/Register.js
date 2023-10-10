import React, { useEffect, useState } from 'react';
import { api } from '../../utils/MainApi';
import UserForm from '../UserForm/UserForm.js';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';

// Компонент для регистрации
function Register({ onSuccessRegister, onFailRegister }) {
    // Стейт с текстом ошибки
    const [textErrorMessage, setTextErrorMessage] = useState();
    // Запуск валидации
    const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

    // Очистка полей от ошибок
    useEffect(() => {
        resetForm();
    }, []);

    // Обработчик регистрации
    const onRegister = (e) => {
        e.preventDefault();

        api.register(values.name, values.email, values.password)
            .then((res) => {
                try {
                    onSuccessRegister(values.email, values.password);
                } catch (err) {
                    onFailRegister({ body: { error: err } })
                }
            })
            .catch(err => {
                err.msg.then(errMsg => {
                    console.log('errMsg', errMsg)
                    onFailRegister(errMsg, setTextErrorMessage)
                }
                )
            });
    }

    return (
        <UserForm name="register" title="Добро пожаловать!" buttonText="Зарегистрироваться"
            text="Уже зарегистрированы?" textLink="Войти" redirect="/signin"
            onSubmit={onRegister} isSubmitEnable={isValid}
        >
            <div className="form__field-conteiner">

                <div className="form__field-content">
                    <label className="form__label" htmlFor="name">Имя</label>
                    <input
                        id="name"
                        className={`form__field  ${errors?.name ? "form__field_error" : ""}`}
                        type="text"
                        name="name"
                        minLength={2}
                        maxLength={40}
                        required
                        value={values.name ?? ''}
                        onChange={handleChange}
                        placeholder="Имя"
                    />
                    <span className={`form__error email-error  ${errors?.name ? "form__error_visible-user" : ""}`}>
                        {errors?.email}</span>
                </div>


                <div className="form__field-content">
                    <label className="form__label" htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        className={`form__field ${errors?.email ? "form__field_error" : ""}`}
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

export default Register;