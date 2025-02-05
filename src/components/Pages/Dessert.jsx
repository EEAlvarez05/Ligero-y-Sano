import Info from "../Info";
import Images from "../Images"
import "../styles/Recipes.css"

function Dessert() {
    return (  
        <main>
            <div className="main__title-recipe">
                <h2>
                    {Info[0]["Title-recipe"]}
                </h2>
            </div>
            <div className="main__description">
                <p>
                    {Info[0]["Description-recipe"]}
                </p>
            </div>
            <div className="main__tip-title">
                <h4>Tips del dia</h4>
            </div>
            <div className="main__tip">
                <div className="tip">
                    <p>
                        {Info[0].Tip1}
                    </p>
                </div>
                <div className="tip">
                    <p>
                        {Info[0].Tip2}
                    </p>
                </div>
                <div className="tip">
                    <p>
                        {Info[0].Tip3}
                    </p>
                </div>
            </div>
            <div className="main__recipes">
                <div className="recipes--card">
                    <h4>
                        {Images[0].title}
                    </h4>
                    <img src={Images[0].dessert} alt="" />
                </div>
                <div className="recipes--card">
                    <h4>
                        {Images[1].title}
                    </h4>
                    <img src={Images[1].dessert} alt="" />
                </div>
                <div className="recipes--card">
                    <h4>
                        {Images[2].title}
                    </h4>
                    <img src={Images[2].dessert} alt="" />
                </div>
            </div>
        </main>
    );
}

export default Dessert;