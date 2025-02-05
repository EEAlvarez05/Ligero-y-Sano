import Info from "../Info";
import Images from "../Images"
import "../styles/Recipes.css"

function Meat() {
    return (  
        <main>
            <div className="main__title-recipe">
                <h2>
                    {Info[2]["Title-recipe"]}
                </h2>
            </div>
            <div className="main__description">
                <p>
                    {Info[2]["Description-recipe"]}
                </p>
            </div>
            <div className="main__tip-title">
                <h4>Tips del dia</h4>
            </div>
            <div className="main__tip">
                <div className="tip">
                    <p>
                        {Info[2].Tip1}
                    </p>
                </div>
                <div className="tip">
                    <p>
                        {Info[2].Tip2}
                    </p>
                </div>
                <div className="tip">
                    <p>
                        {Info[2].Tip3}
                    </p>
                </div>
            </div>
            <div className="main__recipes">
                <div className="recipes--card">
                    <h4>
                        {Images[6].title}
                    </h4>
                    <img src={Images[6].meat} alt="" />
                </div>
                <div className="recipes--card">
                    <h4>
                        {Images[7].title}
                    </h4>
                    <img src={Images[7].meat} alt="" />
                </div>
                <div className="recipes--card">
                    <h4>
                        {Images[8].title}
                    </h4>
                    <img src={Images[8].meat} alt="" />
                </div>
            </div>
        </main>
    );
}

export default Meat;