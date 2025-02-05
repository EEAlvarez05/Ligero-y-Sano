import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";
import ToggleDarkLight from "./ToggleDarkLight";
import ButtonMenu from "./ButtonMenu";


function Hheader() {
    return (  
        <header>
            <NavBarMobile />
            <ButtonMenu />
            <ToggleDarkLight />
            <div className="header__title">
                <h1>Ligero & Sano</h1>
            </div>
            <NavBarDesktop />
        </header>
    );
}

export default Hheader;