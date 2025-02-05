import { useEffect, useState } from "react";
import Info from "./Info";
import { Link } from "react-router-dom";

function Linkss() {
    const [dropDown, setDropDown] = useState(false)
    const ChangeDropDown = () => {
        setDropDown(!dropDown)
    }
    useEffect(() => {
        document.querySelector("body").classList.toggle("nav__dropdown-active")
    },[dropDown])
    return (  
        <ul>
            <li><Link to="/"><i className="fa-solid fa-house"></i>Home</Link></li>
            <li><i className="fa-solid fa-user"></i>Sobre Nosotros</li>
            <li className="link--button"><button onClick={ChangeDropDown}><i className="fa-solid fa-book"></i>Recetas
            <i className="fa-solid fa-caret-down"></i></button>
                <div className="nav__dropdown">
                    <ul>
                        <li><Link to="/Sopas-y-Entradas">
                            <i className='bx bxs-bowl-hot'></i>{Info[4]["Title-recipe"]}</Link>
                        </li>
                        <li><Link to="/Carnes">
                            <i className="fa-solid fa-drumstick-bite"></i>{Info[2]["Title-recipe"]}</Link>
                        </li>
                        <li><Link to="/Pescados">
                            <i className="fa-solid fa-fish"></i>{Info[1]["Title-recipe"]}</Link>
                        </li>
                        <li><Link to="/Ensaladas-y-Verduras">
                            <i className="fa-solid fa-carrot"></i>{Info[3]["Title-recipe"]}</Link>
                        </li>
                        <li><Link to="/Postres">
                            <i className="fa-solid fa-ice-cream"></i>{Info[0]["Title-recipe"]}</Link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    );
}

export default Linkss
;