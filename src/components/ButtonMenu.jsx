import { useState, useEffect } from "react";

function ButtonMenu() {
    const [navActivate, setNavActivate] = useState(false);
    const [mounted, setMounted] = useState(false); // Verifica si el componente ya se montó

    useEffect(() => {
        setMounted(true); // Indica que ya estamos en el cliente
    }, []);

    useEffect(() => {
        if (!mounted) return; // Evita ejecutar en el SSR

        if (navActivate) {
            document.querySelector("body").classList.add("nav__active");
        } else {
            document.querySelector("body").classList.remove("nav__active");
        }
    }, [navActivate, mounted]);

    const ChangeNav = () => {
        setNavActivate((prev) => !prev);
    };

    return (
        <button className="headermenu" onClick={ChangeNav}>
            <span className="menu--span">
                <i className="fa-solid fa-bars"></i>
                <i className="fa-solid fa-x"></i>
            </span>
        </button>
    );
}

export default ButtonMenu;