function Ffooter() {
    return (  
        <footer>
            <div className="footer__title">
                <h4>Ligero & Sano</h4>
            </div>
            <div className="footer__container">
                <div className="footer__text">
                    <p>"Somos una página dedicada a compartir recetas ligeras, fáciles y deliciosas. Inspiramos a nuestros usuarios a llevar una vida saludable sin renunciar al placer de comer."</p>
                </div>
                <div className="footer__social">
                    <div className="social--text">
                        <p>Síguenos</p>
                    </div>
                    <div className="social--icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                    </div>
                </div>
            </div>
            <div className="footer__copy">
                <p>© 2024 Ligero & Sano.</p>
                <p>Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Ffooter;