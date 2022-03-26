export default function Home() {

    return (
        <div>
            { /* End Footer */}
            <footer className="bg-dark" id="tempaltemo_footer" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 pt-5">
                            <h2 className="h2 text-success border-bottom pb-3 border-light logo">Zay Shop</h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-fw" />
                                    Trinh Van Bo Street, Nam Tu Liem District, Hanoi
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-fw" />
                                    <a className="text-decoration-none" href="tel:0333103855">0333-103-855</a>
                                </li>
                                <li>
                                    <i className="fa fa-envelope fa-fw" />
                                    <a className="text-decoration-none" href="hailvph13040@fpt.edu.vn">hailvph13040@fpt.edu.vn</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4 pt-5">
                            <ul className="list-inline text-left footer-icons">
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw" /></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw" /></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw" /></a>
                                </li>
                                <li className="list-inline-item border border-light rounded-circle text-center">
                                    <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-100 bg-black py-3">
                    <div className="container">
                        <div className="row pt-2">
                            <div className="col-12">
                                <p className="text-left text-light">
                                    Copyright © 2022 Company Name
                                    | Designed by <a rel="sponsored" href="#" target="_blank">Hai Lê</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer */}
        </div>
    )
}
