import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAccountByUsername, saveAccount, updateAccount } from "../../api/account-instance";
import { addAccountCreator, updateAccountCreator } from "../../redux/actionCreator/accountCreator";

export default function AddAccount() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const dipatch = useDispatch()
    const [account, setAccount] = useState({});
    const [isEdit, setEdit] = useState(false);
    //get id from url
    const { username } = useParams();
    useEffect(() => {
        if (username !== undefined) {
            setEdit(true);
            getAccountByUsername(username).then(resp => setAccount(resp.data));
        }
    }, []);

    const onHandleSubmit = async (data) => {
        if (isEdit) {
            console.log('update')
            await updateAccount(data).then(resp => {
                if (resp.status == 200) {
                    dipatch(updateAccountCreator(resp.data))
                    navigate('/account/manager')
                }
            })
        } else {
            console.log('add', data)
            await saveAccount(data).then(resp => {
                if (resp.status == 200) {
                    dipatch(addAccountCreator(resp.data))
                    navigate('/account/manager')
                }
            })
        }
    }
    const onHandleCancel = () => {
        navigate("/account/manager")
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
                    <div className="row justify-content-center">
                        {isEdit ?
                            <h1 className="text-success">UPDATE ACCOUNT</h1>
                            :
                            <h1 className="text-success">ADD ACCOUNT</h1>}
                        <div className="col-md-6">
                            <form className="" onSubmit={handleSubmit(onHandleSubmit)}>
                                <div className="form-floating mb-3">
                                    <input type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="usernameexample"
                                        {...register("username", { required: true })}
                                        defaultValue={account.username} />
                                    <label htmlFor="floatingInput">Username</label>
                                    {errors.username && (
                                        <span className="text-danger">Username is not empty</span>
                                    )}
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text"
                                        className="form-control"
                                        id="fullName"
                                        placeholder="Full Name"
                                        {...register("fullname", { required: true })}
                                        defaultValue={account.fullname} />
                                    <label htmlFor="fullName">FullName</label>
                                    {errors.fullname && (
                                        <span className="text-danger">Fullname is not empty</span>
                                    )}
                                </div>
                                {isEdit ?
                                    <div></div>
                                    :
                                    <div className="form-floating mb-3">
                                        <input type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            {...register("password", { required: true })} />
                                        <label htmlFor="password">Password</label>
                                        {errors.password && (
                                            <span className="text-danger">Fullname is not empty</span>
                                        )}
                                    </div>
                                }
                                <div className="form-floating mb-3">
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="email@example.com"
                                        {...register("email", { required: true })}
                                        defaultValue={account.email} />
                                    <label htmlFor="email">Email</label>
                                    {errors.email && (
                                        <span className="text-danger">Email is not empty</span>
                                    )}
                                </div>
                                <div className="row">
                                    <div className="col-md-6 text-start mb-3">
                                        <label className="mb-2">Role</label>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="radio"
                                                id="flexRadioDefault1"
                                                value="role_admin"
                                                checked={account.role == 'role_admin'}
                                                {...register("role")}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Admin
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="radio"
                                                id="flexRadioDefault2"
                                                value="role_user"
                                                {...register("role")}
                                                checked={account.role == 'role_user'}
                                                defaultChecked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                User
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-start mb-3">
                                        <label className="mb-2">Activated</label>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="radio"
                                                id="flexRadioDefault3"
                                                value="true"
                                                checked={account.activated}                                   
                                                {...register("activated")} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                Active
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="radio"
                                                id="flexRadioDefault4"
                                                value="false"
                                                checked={!account.activated}
                                                {...register("activated")} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                In-Active
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2">

                                    <button className="col-md-3 btn btn-primary me-2" type="submit">Submit</button>
                                    <button className="col-md-3 btn btn-danger" onClick={onHandleCancel}>Cancel</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}