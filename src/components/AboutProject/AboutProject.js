function AboutProject() {
    return (
        <section className="about-roject page__padding-max" id="project">
            <div className="about-roject__paragraph">
                <p className="about-roject__paragraph-text">О проекте</p>
            </div>

            <div className="about-roject__container">
                <div className="about-roject__text-container">
                    <p className="about-roject__text">Дипломный проект включал 5 этапов</p>
                    <p className="about-roject__subtitle">Составление плана, работу над
                        бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>

                <div className="about-roject__text-container">
                    <p className="about-roject__text">На выполнение диплома ушло 5 недель</p>
                    <p className="about-roject__subtitle">У каждого этапа был мягкий и жёсткий
                        дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="about-roject__timeline">
                <div className="about-roject__timeline-container">
                    <div className="about-roject__timeline-elem_min">
                        <p className="about-roject__timeline-time_min">1 неделя</p>
                    </div>
                    <p className="about-roject__timeline-stage">Back-end</p>
                </div>

                <div className="about-roject__timeline-container">
                    <div className="about-roject__timeline-elem_max">
                        <p className="about-roject__timeline-time_max">4 недели</p>
                    </div>
                    <p className="about-roject__timeline-stage">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;