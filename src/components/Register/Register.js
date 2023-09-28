import UserForm from '../UserForm/UserForm.js';

function Register() {
    return (
        <UserForm name="register" title="Добро пожаловать!" buttonText="Зарегистрироваться"
            text="Уже зарегистрированы?" textLink="Войти" redirect="/signin"
        // onSubmit={onRegister} isSubmitEnable={isValid}
        >
            <div className="form__label"></div>
        </UserForm>
    )
}

export default Register;