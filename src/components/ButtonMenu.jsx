import { useState } from "react";
import { useEffect } from "react";

function ButtonMenu() {
    const [navActivate, setNavActivate] = useState(false)
    const ChangeNav = () => {
        setNavActivate(!navActivate)
    }
    useEffect(() => {
        document.querySelector("body").classList.toggle("nav__active")
        setNavActivate(false)
    },[navActivate])
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