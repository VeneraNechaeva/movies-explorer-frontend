import React, { useEffect } from 'react';
import UserForm from '../UserForm/UserForm.js';
import { useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';

function Login({ handleLogin }) {

    // Запуск валидации
    const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

    // Хук возвращает функцию, которая позволяет рограммно перемещаться
    const navigate = useNavigate();

    // Очистка полей от ошибок
    useEffect(() => {
        resetForm();
    }, []);


    // Обработчик авторизации
    const onLogin = (e) => {
        e.preventDefault();
        resetForm();
        handleLogin(e);
        navigate('/movies', { replace: true });
    }

    return (
        <UserForm name="login" title="Рады видеть!" buttonText="Войти"
            text="Ещё не зарегистрированы?" textLink="Регистрация" redirect="/signup"
            onSubmit={onLogin} isSubmitEnable={isValid}
        >
            <div className="form__field-conteiner-log">

                <div className="form__field-content">
                    <label className="form__label" for="email">E-mail</label>
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
                    />
                    <span className={`form__error email-error  ${errors?.email ? "form__error_visible-user" : ""}`}>
                    {errors?.email}</span>
                </div>

                <div className="form__field-content">
                    <label className="form__label" for="password">Пароль</label>
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
                    />
                    <span className={`form__error password-error  ${errors?.password ? "form__error_visible-user" : ""}`}>
                    {errors?.password}</span>
                </div>
            </div>
        </UserForm>
    )
}

export default Login;