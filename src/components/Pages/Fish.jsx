import Info from "../Info";
import Images from "../Images"
import "../styles/Recipes.css"

function Fish() {
    return (  
        <main>
            <div className="main__title-recipe">
                <h2>
                    {Info[1]["Title-recipe"]}
                </h2>
            </div>
            <div className="main__description">
                <p>
                    {Info[1]["Description-recipe"]}
                </p>
            </div>
            <div className="main__tip-title">
                <h4>Tips del dia</h4>
            </div>
            <div className="main__tip">
                <div className="tip">
                    <p>
                        {Info[1].Tip1}
                    </p>
                </div>
                <div className="tip">
                    <p>
                        {Info[1].Tip2}
                    </p>
                </div>
                <div className="tip">
                    <p>
                        {Info[1].Tip3}
                    </p>
                </div>
            </div>
            <div className="main__recipes">
                <div className="recipes--card">
                    <h4>
                        {Images[3].title}
                    </h4>
                    <img src={Images[3].fish} alt="" />
                </div>
                <div className="recipes--card">
                    <h4>
                        {Images[4].title}
                    </h4>
                    <img src={Images[4].fish} alt="" />
                </div>
                <div className="recipes--card">
                    <h4>
                        {Images[5].title}
                    </h4>
                    <img src={Images[5].fish} alt="" />
                </div>
            </div>
        </main>
    );
}

export default Fish;