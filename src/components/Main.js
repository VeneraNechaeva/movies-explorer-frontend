import Promo from './Promo.js';
import NavTab from './NavTab.js';
import AboutProject from './AboutProject.js';
import Techs from './Techs.js';
import AboutMe from './AboutMe.js';
import Portfolio from './Portfolio.js';

function Main() {
    return (
        <main className="content">
            <Promo></Promo>
            <NavTab></NavTab>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
        </main>
    )
}

export default Main;