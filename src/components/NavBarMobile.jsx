import ToggleDarkLight from "./ToggleDarkLight";
import Linkss from "./Links";

function NavBarMobile() {
    return (  
        <nav>
            <div className="nav__mobile">
                <div className="nav__navbar">
                    <Linkss />
                <ToggleDarkLight />
                </div>
                <div className="nav__blur"></div>
            </div>
        </nav>
    );
}

export default NavBarMobile;