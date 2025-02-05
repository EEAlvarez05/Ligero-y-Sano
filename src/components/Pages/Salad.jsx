import Info from "../Info";
import Images from "../Images"
import "../styles/Recipes.css"

function Salad() {
    return (  
        <main>
            <div className="main__title-recipe">
                <h2>
                    {Info[3]["Title-recipe"]}
                </h2>
            </div>
            <div className="main__description">
                <p>
                    {Info[3]["Description-recipe"]}
                </p>
            </div>
            <div className="main__tip-title">
                <h4>Tips del dia</h4>
            </div>
            <div className="main__tip">
                <div className="tip">
                    <p>
                        {Info[3].Tip1}
                    </p>
                </div>
                <div className="tip">
                    <p>
                        {Info[3].Tip2}
                    </p>
                </div>
                <div className="tip">
                    <p>
                        {Info[3].Tip3}
                    </p>
                </div>
            </div>
            <div className="main__recipes">
                <div className="recipes--card">
                    <h4>
                        {Images[9].title}
                    </h4>
                    <img src={Images[9].salad} alt="" />
                </div>
                <div className="recipes--card">
                    <h4>
                        {Images[10].title}
                    </h4>
                    <img src={Images[10].salad} alt="" />
                </div>
                <div className="recipes--card">
                    <h4>
                        {Images[11].title}
                    </h4>
                    <img src={Images[11].salad} alt="" />
                </div>
            </div>
        </main>
    );
}

export default Salad;