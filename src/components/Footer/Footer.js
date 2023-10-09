import React from 'react';

function Footer() {

    // Динамическое обновление года
    let date = new Date().getFullYear();

    return (
        <section className="footer page__padding-min">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__copyright">
                <p className="footer__date">© {date}</p>
                <div className="footer__link-container">
                    <a className="footer__link-elem" href="https://practicum.yandex.ru/"
                        target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link-elem" href="https://github.com/VeneraNechaeva"
                        target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </section>
    )
}

export default Footer;
