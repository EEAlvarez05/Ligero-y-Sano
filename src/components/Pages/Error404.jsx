import "../styles/Error404.css"
import ImageError from "../../assets/images/image-error.svg"

function Error404() {
    return (  
        <div className="error__container">
            <div className="error--image">
                <img src={ImageError} alt="" />
            </div>
            <div className="error--text">
                <div className="text--title">
                    <h2>Oops</h2>
                </div>
                <div className="text--text">
                    <p>Esta receta se nos pasó de cocción… y la página también.</p>
                </div>
            </div>
        </div>
    );
}

export default Error404;