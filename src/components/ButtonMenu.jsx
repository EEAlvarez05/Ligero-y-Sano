import { useState } from "react";
import { useEffect } from "react";

function ButtonMenu() {
    const [navActivate, setNavActivate] = useState(true)
    useEffect(() => {
        document.querySelector("body").classList.toggle("nav__active")
    },[navActivate])
    const ChangeNav = () => {
        setNavActivate(!navActivate)
    }
    return (  
        <button className="header__menu" onClick={ChangeNav}>
            <span className="menu--span">
                <i className="fa-solid fa-bars"></i>
                <i className="fa-solid fa-x"></i>
            </span>
        </button>
    );
}

export default ButtonMenu;