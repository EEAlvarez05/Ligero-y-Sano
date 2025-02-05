import { useEffect } from "react";
import { useState } from "react";

function ToggleDarkLight() {
    const [themeDark, setThemeDark] = useState(false)

    const ChangeTheme = () => {
        setThemeDark(!themeDark)
    }
    useEffect(() => {
        document.querySelector("html").classList.toggle("dark")
    },[themeDark])
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