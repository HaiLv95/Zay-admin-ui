import { NavLink, Link } from 'react-router-dom';
export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-success fs-1 fw-bold" to="/home">Zay shop</NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/account/manager">Account Manage</NavLink>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
                        <div className='btn-group'>
                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="material-icons-outlined">
                                    account_circle
                                </span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><Link className="dropdown-item" to="/login">Sign-in</Link></li>
                                <li><Link className="dropdown-item" to="/signup">Sign-up</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/forgotpassword">Forgot-Password</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}