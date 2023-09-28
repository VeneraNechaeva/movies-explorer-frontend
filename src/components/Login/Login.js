import UserForm from '../UserForm/UserForm.js';

function Login() {
    return (
        <UserForm name="login" title="Рады видеть!" buttonText="Войти"
            text="Ещё не зарегистрированы?" textLink="Регистрация" redirect="/signup"
        // onSubmit={onLogin} isSubmitEnable={isValid}
        >
            <div className="form__label"></div>
        </UserForm>





    )
}

export default Login;