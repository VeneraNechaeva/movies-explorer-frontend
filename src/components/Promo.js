import PromoLogo from '../images/Vector-promo-logo.svg';

function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета
                Веб-разработки.</h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать
                больше про этот проект и его создателя.</p>
            <img
                className="promo__logo"
                src={PromoLogo}
                alt="Логотип учебного проекта"
            />
            <button className="promo__button" type="button">Узнать больше
                {/* onClick={onEditProfile} */}
            </button>
        </section>
    )
}

export default Promo;