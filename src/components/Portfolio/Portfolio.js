function Portfolio() {
    return (
        <section className="portfolio page__padding-midl">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list-link">
                <li className="portfolio__link-container">
                    <a className="portfolio__link-text"
                        href="https://github.com/VeneraNechaeva/how-to-learn"
                        target="_blank" rel="noreferrer">Статичный сайт</a>
                    <div className="portfolio__icon-link"></div>
                </li>
                <li className="portfolio__link-container">
                    <a className="portfolio__link-text"
                        href="https://github.com/VeneraNechaeva/russian-travel"
                        target="_blank" rel="noreferrer">Адаптивный сайт</a>
                    <div className="portfolio__icon-link"></div>
                </li>
                <li className="portfolio__link-container">
                    <a className="portfolio__link-text"
                        href="https://github.com/VeneraNechaeva/react-mesto-api-full-gha"
                        target="_blank" rel="noreferrer">Одностраничное приложение</a>
                    <div className="portfolio__icon-link"></div>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;





