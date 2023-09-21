function Portfolio() {
    return (
        <section className="portfolio page__padding">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list-link">
                <li className="portfolio__link-container">
                    <a className="portfolio__link-text"
                        href="https://github.com/VeneraNechaeva/how-to-learn">Статичный сайт</a>
                    <div className="portfolio__icon-link"></div>
                </li>
                <li className="portfolio__link-container">
                    <a className="portfolio__link-text"
                        href="https://github.com/VeneraNechaeva/russian-travel">Адаптивный сайт</a>
                    <div className="portfolio__icon-link"></div>
                </li>
                <li className="portfolio__link-container">
                    <a className="portfolio__link-text"
                        href="https://github.com/VeneraNechaeva/react-mesto-api-full-gha">Одностраничное приложение</a>
                    <div className="portfolio__icon-link"></div>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;


{/* <img
className="portfolio__icon-link"
src={Iconlink}
alt="Фото студента"
/> */}




