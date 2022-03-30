import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountManage from "./account/account-manager";
import AddAccount from "./account/add-account";
import Login from "./home/login";
import NavBar from "./home/navBar";

export default function RouterManager() {
    return (
        <div className='container-fluid'>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/home' element={'<h1>home</h1>'}></Route>
                    <Route path='/account/add' element={<AddAccount />}></Route>
                    <Route path='/account/manager' element={<AccountManage />}></Route>
                    <Route path='/forgotpassword' element={'<h1>forgotpassword</h1>'}></Route>
                    <Route path='/signup' element={'<h1>signup</h1>'}></Route>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}