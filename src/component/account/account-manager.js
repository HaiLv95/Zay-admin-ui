import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { accountSelector } from "../../redux/actionCreator/accountSelector";
export default function AccountManage() {

    const accountSelect = useSelector(state => accountSelector(state));
    console.log('account manager', accountSelect)

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
                            {accountSelect.map((account, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{account.username}</td>
                                    <td>{account.fullname}</td>
                                    <td>{account.email}</td>
                                    <td>{account.activated ? 'active' : 'in-active'}</td>
                                    <td>{account.activated ?
                                        <span class="material-icons-outlined">lock</span> : <span class="material-icons-outlined">lock_open</span>}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}