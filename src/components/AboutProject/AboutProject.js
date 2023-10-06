function AboutProject() {
    return (
        <section className="about-project page__padding-max" id="project">
            <div className="about-project__paragraph">
                <p className="about-project__paragraph-text">О проекте</p>
            </div>

            <div className="about-project__container">
                <div className="about-project__text-container">
                    <p className="about-project__text">Дипломный проект включал 5 этапов</p>
                    <p className="about-project__subtitle">Составление плана, работу над
                        бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>

                <div className="about-project__text-container">
                    <p className="about-project__text">На выполнение диплома ушло 5 недель</p>
                    <p className="about-project__subtitle">У каждого этапа был мягкий и жёсткий
                        дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="about-project__timeline">
                <div className="about-project__timeline-container">
                    <div className="about-project__timeline-elem-min">
                        <p className="about-project__timeline-time-min">1 неделя</p>
                    </div>
                    <p className="about-project__timeline-stage">Back-end</p>
                </div>

                <div className="about-project__timeline-container">
                    <div className="about-project__timeline-elem-max">
                        <p className="about-project__timeline-time-max">4 недели</p>
                    </div>
                    <p className="about-project__timeline-stage">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;