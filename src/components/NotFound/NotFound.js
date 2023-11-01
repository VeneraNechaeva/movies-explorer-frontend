import React, { useNavigate, Link } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    const goToPrevPage = (e) => { 
        e.preventDefault();
        navigate(-1);
    }

    return (
        <main className="error">
            <h2 className="error__title">404</h2>
            <p className="error__subtitle">Страница не найдена</p>
            <Link className="error__link" to="/" onClick={goToPrevPage}>Назад</Link>
        </main>
    )
}

export default NotFound;