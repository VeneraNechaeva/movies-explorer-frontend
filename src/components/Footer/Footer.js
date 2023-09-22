import React from 'react';

function Footer() {

    // Динамическое обновление года
    let date = new Date().getFullYear();

    return (
        <section className="footer page__padding">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__copyright">
                <p className="footer__date">© {date}</p>
                <div className="footer__text-container">
                    <p className="footer__text-elem">Яндекс.Практикум</p>
                    <p className="footer__text-elem">Github</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;