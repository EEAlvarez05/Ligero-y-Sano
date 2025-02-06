import Images from "./Images"
import Sslider from "./Slider";
import Info from "./Info";
import Aaside from "./Aside";
import Aarticle from "./Aarticle"

function Home() {
    return (  
        <main>
        <Aaside />
        <Aarticle />
        <div className="main__recipe-title">
            <h3>Receta del dia</h3>
        </div>
        <Sslider />
        <div className="main__title">
            <div className="mtitle--title">
                <h3>Recetas Ligeras y Deliciosas</h3>
            </div>
            <div className="mtitle--text">
                <p>Explora nuestras categorías de recetas saludables y encuentra inspiración para tus comidas diarias. Pastas, carnes, pescados, verduras y postres, todas preparadas con amor y cuidado para tu bienestar.</p>
            </div>
        </div>
        <div className="main__list">
            <div className="list--container"><a href="/sopas-y-entradas">
                <div className="list--text">
                    <h4>
                        {Info[4]["Title-recipe"]}
                    </h4>
                </div>
                <div className="list--icon">
                    <i className='bx bxs-bowl-hot'></i>
                </div></a>
            </div>
            <div className="list--container"><a href="/carnes">
                <div className="list--text">
                    <h4>
                        {Info[2]["Title-recipe"]}</h4>
                </div>
                <div className="list--icon">
                    <i className="fa-solid fa-drumstick-bite"></i>
                </div></a>
            </div>
            <div className="list--container"><a href="/pescados">
                <div className="list--text">
                    <h4>
                        {Info[1]["Title-recipe"]}
                    </h4>
                </div>
                <div className="list--icon">
                    <i className="fa-solid fa-fish"></i>
                </div></a>
            </div>
            <div className="list--container"><a href="/ensaladas-y-verduras">
                <div className="list--text">
                    <h4>
                        {Info[3]["Title-recipe"]}</h4>
                </div>
                <div className="list--icon">
                    <i className="fa-solid fa-carrot"></i>
                </div></a>
            </div>
            <div className="list--container"><a href="/postres">
                <div className="list--text">
                    <h4>
                        {Info[0]["Title-recipe"]}
                    </h4>
                </div>
                <div className="list--icon">
                    <i className="fa-solid fa-ice-cream"></i>
                </div></a>
            </div>
        </div>
        </main>
    );
}

export default Home;