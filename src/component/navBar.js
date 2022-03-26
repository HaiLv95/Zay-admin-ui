import { NavLink, Link } from 'react-router-dom';
export default function NavBar() {

    return (
        <div>
            {/* Start Top Nav */}
            <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
                <div className="container text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa fa-envelope mx-2" />
                            <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:hailvph13040@fpt.edu.vn">hailvph13040@fpt.edu.vn</a>
                            <i className="fa fa-phone mx-2" />
                            <a className="navbar-sm-brand text-light text-decoration-none" href="tel:0333103855">033-310-3855</a>
                        </div>
                        <div>
                            <a className="text-light" href="https://fb.com/templatemo" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2" /></a>
                            <a className="text-light" href="https://www.instagram.com/" ><i className="fab fa-instagram fa-sm fa-fw me-2" /></a>
                            <a className="text-light" href="https://twitter.com/" ><i className="fab fa-twitter fa-sm fa-fw me-2" /></a>
                            <a className="text-light" href="https://www.linkedin.com/" ><i className="fab fa-linkedin fa-sm fa-fw" /></a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Close Top Nav */}
            {/* Header */}
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <NavLink className="navbar-brand text-success logo h1 align-self-center" to="/home">
                        Zay Shop
                    </NavLink>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-start mx-lg-auto">
                                <li className="nav-item col-3">
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item col-3">
                                    <NavLink className="nav-link" to="/shop">Shop</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search" />
                                    </div>
                                </div>
                            </div>
                            <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                                <i className="fa fa-fw fa-search text-dark mr-2" />
                            </a>
                            <NavLink className="nav-icon position-relative text-decoration-none" to="/shopping-cart">
                                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
                            </NavLink>
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                            </a><div className="dropdown"><a className="nav-icon position-relative text-decoration-none" href="#">
                            </a><a className="dropdown-toggle text-decoration-none" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">


                                    <i className="fa fa-fw fa-user text-dark mr-3" />

                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/login">Sign In</Link></li>
                                    <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#forgotPassword">Forgot Password</a></li>
                                    <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Close Header */}
            {/* Modal  Search*/}
            <div className="modal fade bg-white" id="templatemo_search" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="w-100 pt-1 mb-5 text-right">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <form action="/shop/search" method="get" className="modal-content modal-body border-0 p-0">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inputModalSearch" name="name" placeholder="Search ..." />
                            <button type="submit" className="input-group-text bg-success text-light">
                                <i className="fa fa-fw fa-search text-white" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* End Modal */}
            {/*    Modal ChangePassword    */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="staticBackdropLabel">Change Password</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Username" />
                                    <label htmlFor="floatingInput">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="oldPass" placeholder="Password" name="oldPass" />
                                    <label htmlFor="oldPass">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="newPass" name="newPass" placeholder="Password" />
                                    <label htmlFor="newPass">New Password</label>
                                    <span id="warning" style={{ color: 'red' }} />
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="cfNewPass" placeholder="Password" />
                                    <label htmlFor="cfNewPass">Confirm New Password</label>
                                    <span id="warning1" style={{ color: 'red' }} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" id="submit" className="btn btn-primary">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*    End Modal ChangePassword    */}
            {/*    Modal ForgotPassword    */}
            <div className="modal fade" id="forgotPassword" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="staticBackdropLabel1">Change Password</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <form method="post">
                            <div className="modal-body">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="username" name="username" />
                                    <label htmlFor="floatingInput">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="email" name="email" />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*    End Modal ForgotPassword    */}
        </div>
    )
}