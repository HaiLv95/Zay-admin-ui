import { useDispatch } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { removeAllAccountCreator } from '../../redux/actionCreator/accountCreator';
import { removeAllProductCreator } from '../../redux/actionCreator/product/productCreator';
export default function NavBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const onHandleLogout = () => {
        localStorage.setItem('token', '');
        localStorage.setItem('username', '')
        dispatch(removeAllAccountCreator());
        dispatch(removeAllProductCreator())
    }
    const onAccountManage = () => {
        if (localStorage.getItem('token') === '') {
            navigate('/login')
        } else {
            navigate('/account/manager')
        }
    }
    const onProductManage = () => {
        if (localStorage.getItem('token') === '') {
            navigate('/login')
        } else {
            navigate('/product/manager')
        }
    }
    const onOrderManage = () => {
        if (localStorage.getItem('token') === '') {
            navigate('/login')
        } else {
            navigate('/order/manager')
        }
    }
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
                            <button className="nav-link" onClick={onAccountManage} style={{ border: 'none', background: 'none' }} >Account Manage</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={onProductManage} style={{ border: 'none', background: 'none' }} >Product Manage</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={onOrderManage} style={{ border: 'none', background: 'none' }} >Order List</button>
                        </li>
                    </ul>
                    <div className='d-flex'>
                        <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
                        <div className='btn-group'>
                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                {(localStorage.getItem('token') !== '') ? username :
                                    <span className="material-icons-outlined">
                                        account_circle
                                    </span>}
                            </button>
                            {(localStorage.getItem('token') !== '') ?
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><button className="dropdown-item" onClick={onHandleLogout}>Sign-out</button></li>
                                </ul>
                                :
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link className="dropdown-item" to="/login">Sign-in</Link></li>
                                    <li><Link className="dropdown-item" to="/signup">Sign-up</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/forgotpassword">Forgot-Password</Link></li>
                                </ul>}

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}