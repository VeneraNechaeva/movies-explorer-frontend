import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <main className="error">
            <h2 className="error__title">404</h2>
            <p className="error__subtitle">Страница не найдена</p>
            <Link className="error__link" to="/">Назад</Link>
        </main>
    )
}

export default NotFound;