import Promo from '../Promo/Promo.js';
// import Paragraph from '../Paragraph/Paragraph.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';

function Main() {
    return (
        <main className="content">
            <Promo></Promo>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
        </main>
    )
}

export default Main;