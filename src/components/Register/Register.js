import React, { useEffect } from 'react';
import UserForm from '../UserForm/UserForm.js';
import { useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';

function Register() {

    // Запуск валидации
    const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

    // Хук возвращает функцию, которая позволяет рограммно перемещаться
    const navigate = useNavigate();

    // Очистка полей от ошибок
    useEffect(() => {
        resetForm();
    }, []);


    // Обработчик регистрации
    const onRegister = (e) => {
        e.preventDefault();
        resetForm();
        navigate('/signin', { replace: true });
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
        </UserForm>
    )
}

export default Register;