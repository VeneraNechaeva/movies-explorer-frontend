import Photo from '../../images/Photo.jpg';

function AboutMe() {
    return (
        <section className="about-me page__padding-midl">
            <div className="about-me__paragraph">
                <p className="about-me__paragraph-text">Студент</p>
            </div>
            <article className="about-me__container">
                <div className="about-me__text-container">
                    <h2 className="about-me__name">Виталий</h2>
                    <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__info">Я родился и живу в Саратове, закончил факультет
                        экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                        бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                        После того, как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="about-me__link" href="https://github.com/VeneraNechaeva"
                        target="_blank" rel="noreferrer">Github</a>
                </div>
                <img
                    className="about-me__avatar"
                    src={Photo}
                    alt="Фото студента"
                />
            </article>
        </section>
    )
}

export default AboutMe;