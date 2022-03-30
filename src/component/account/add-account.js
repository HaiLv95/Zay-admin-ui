import { Link } from "react-router-dom";

export default function AddAccount() {
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
                    <h1>Add Account</h1>
                </div>
            </div>
        </div>
    )
}