import UserForm from '../UserForm/UserForm.js';

function Register() {
    return (
        <UserForm name="register" title="Добро пожаловать!" buttonText="Зарегистрироваться"
            text="Уже зарегистрированы?" textLink="Войти" redirect="/signin"
        // onSubmit={onRegister} isSubmitEnable={isValid}
        >
            <div className="form__field-conteiner">
                <div className="form__field-content">
                    <label className="form__label" for="name">Имя</label>
                    <input
                        id="name"
                        className="form__field"
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


                <div className="form__field-content">
                    <label className="form__label" for="email">E-mail</label>
                    <input
                        id="email"
                        className="form__field form__field-light"
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

                <div className="form__field-content">
                    <label className="form__label" for="password">Пароль</label>
                    <input
                        id="password"
                        className="form__field"
                        type="password"
                        name="password"
                        minLength={10}
                        maxLength={14}
                        required
                    // value={values.password ?? ''}
                    // onChange={handleChange}
                    />
                    {/* <span className={`form__error password-error  ${errors?.password ? "form__error_visible-user" : ""}`}>
                    {errors?.password}</span> */}
                </div>
            </div>
        </UserForm>
    )
}

export default Register;