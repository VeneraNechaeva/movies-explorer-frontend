import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className="error">
            <h2 className="error__title">404</h2>
            <p className="error__subtitle">Страница не найдена</p>
            <Link className="error__link" to="/">Назад</Link>
        </section>
    )
}

export default NotFound;