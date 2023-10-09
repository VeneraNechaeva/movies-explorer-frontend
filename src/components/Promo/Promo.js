import PromoLogo from '../../images/Vector-promo-logo.svg';

function Promo() {
    return (
        <section className="promo page__padding-max">
            <div className="promo__container">
                <div className="promo__text-container">
                    <h1 className="promo__title">Учебный проект студента факультета
                        Веб-разработки.</h1>
                    <p className="promo__subtitle">Листайте ниже, чтобы узнать
                        больше про этот проект и его создателя.</p>
                    <button className="promo__button" type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "#project";
                    }}>Узнать больше</button>
                </div>
                <img
                    className="promo__logo"
                    src={PromoLogo}
                    alt="Логотип учебного проекта"
                />
            </div>
        </section>
    )
}

export default Promo;