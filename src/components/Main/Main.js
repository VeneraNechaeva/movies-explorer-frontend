import Promo from '../Promo/Promo.js';
// import Paragraph from '../Paragraph/Paragraph.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

function Main() {
    return (
        <section className="presentation">
            <Header />
            <main className="content">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </section >
    )
}

export default Main;