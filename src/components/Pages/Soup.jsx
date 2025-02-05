import Info from "../Info";
import Images from "../Images"
import "../styles/Recipes.css"

function Soup() {
    return (  
        <main>
            <div className="main__title-recipe">
                <h2>
                    {Info[4]["Title-recipe"]}
                </h2>
            </div>
            <div className="main__description">
                <p>
                    {Info[4]["Description-recipe"]}
                </p>
            </div>
            <div className="main__tip-title">
                <h4>Tips del dia</h4>
            </div>
            <div className="main__tip">
                <div className="tip">
                    <p>
                        {Info[4].Tip1}
                    </p>
                </div>
                <div className="tip">
                    <p>
                        {Info[4].Tip2}
                    </p>
                </div>
                <div className="tip">
                    <p>
                        {Info[4].Tip3}
                    </p>
                </div>
            </div>
            <div className="main__recipes">
                <div className="recipes--card">
                    <h4>
                        {Images[12].title}
                    </h4>
                    <img src={Images[12].soup} alt="" />
                </div>
                <div className="recipes--card">
                    <h4>
                        {Images[13].title}
                    </h4>
                    <img src={Images[13].soup} alt="" />
                </div>
                <div className="recipes--card">
                    <h4>
                        {Images[14].title}
                    </h4>
                    <img src={Images[14].soup} alt="" />
                </div>
            </div>
        </main>
    );
}

export default Soup;