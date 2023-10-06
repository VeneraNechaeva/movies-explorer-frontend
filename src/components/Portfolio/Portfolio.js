function Portfolio() {
    return (
        <section className="portfolio page__padding-midl">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list-link">
                <li className="portfolio__link-container">
                    <a className="portfolio__link-text"
                        href="https://github.com/VeneraNechaeva/how-to-learn"
                        target="_blank" rel="noreferrer">
                        <div className="portfolio__icon-link"></div>Статичный сайт</a>
                </li>
                <li className="portfolio__link-container">
                    <a className="portfolio__link-text"
                        href="https://github.com/VeneraNechaeva/russian-travel"
                        target="_blank" rel="noreferrer">
                        <div className="portfolio__icon-link"></div>Адаптивный сайт</a>
                </li>
                <li className="portfolio__link-container">
                    <a className="portfolio__link-text"
                        href="https://github.com/VeneraNechaeva/react-mesto-api-full-gha"
                        target="_blank" rel="noreferrer">
                        <div className="portfolio__icon-link"></div>Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;





