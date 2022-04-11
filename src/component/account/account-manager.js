import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { accountSelector } from "../../redux/actionCreator/accountSelector";
import { deleteAccount, getAllAccount} from '../../api/account-instance';
import { getAllAccountCreator, updateAccountCreator } from "../../redux/actionCreator/accountCreator";
import { useEffect } from "react";
export default function AccountManage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authenticated = localStorage.getItem('authenticated')
    console.log('auth', authenticated)
    if (authenticated === 'false') {
        navigate('/login')
    }
    const token = localStorage.getItem('token');
    console.log('token', token)
    useEffect(() => {
        try {
            if (token === null) {
                navigate('/login')
            } else {
                getAllAccount().then(resp => {
                    console.log('resp', resp)
                    console.log('resp', resp)
                    if (resp.status === 200) {
                        dispatch(getAllAccountCreator(resp.data));
                        console.log(resp)
                    }
                });
            }
        } catch (error) {
            console.log('errors', error)

        }
    }, []);
    const accountSelect = useSelector(state => accountSelector(state));
    const onHandleLock = async (username) => {

        await deleteAccount(username).then(resp => dispatch(updateAccountCreator(resp.data)))
    }
    const onHandleEdit = (username) => {
        navigate(`/account/edit/${username}`)
    }
    return (
        <div className="container-fluid">
            <div className="row mt-4 justify-content-center">
                <div className="col-md-2" style={{ borderRight: '1px solid black', minHeight: '600px' }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Link className="link-dark text-decoration-none fw-bold" to="/account/manager">All Account</Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="link-dark text-decoration-none fw-bold" to="/account/add">Add Account</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10">
                    <table className="table table-striped table-bordered border-primary">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Username</th>
                                <th scope="col">Fullname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Activated</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accountSelect.map((item, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.username}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>{item.activated ? 'active' : 'in-active'}</td>
                                    <td>
                                        <button className="me-1" style={{ border: 'none', background: 'none' }} onClick={() => onHandleLock(item.username)}>
                                            {item.activated ?
                                                <span className="material-icons-outlined" style={{ color: 'blue' }}>lock_open</span>
                                                :
                                                <span className="material-icons-outlined" style={{ color: 'red' }}>lock</span>}
                                        </button>
                                        <button className="me-1" style={{ border: 'none', background: 'none' }} onClick={() => onHandleEdit(item.username)}>
                                            <span className="material-icons-outlined" style={{ color: 'blue' }}>
                                                edit
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}