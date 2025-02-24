import { useEffect } from "react";
import { useState } from "react";

function ToggleDarkLight() {
    const [themeDark, setThemeDark] = useState(() => {
        const storedDarkMode = localStorage.getItem("darkMode");
        if (storedDarkMode === "true") {
            return true;
        } else if (storedDarkMode === "false") {
            return false;
        } else {
            const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return prefersDarkMode;
        }
    });

    const ChangeTheme = () => {
        setThemeDark(!themeDark);
        localStorage.setItem("darkMode", !themeDark);
    }
    useEffect(() => {
        if (themeDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [themeDark]);
    return (  
        <section>
            <button onClick={ChangeTheme} className="nav__switch">
                <div className="switch--icons">
                    <div className="icons--circle"></div>
                    <i className='bx bxs-sun'></i>
                    <i className='bx bxs-moon'></i>
                </div>
            </button>
        </section>
    );
}

export default ToggleDarkLight;