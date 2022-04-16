import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountManage from "./account/account-manager";
import AddAccount from "./account/add-account";
import Login from "./home/login";
import NavBar from "./home/navBar";
import OrderManage from "./order/order-manager";
import AddProduct from "./product/add-product";
import ProductManage from "./product/product-manager";
import Home from "./home/home";


export default function RouterManager() {
    return (
        <div className='container-fluid'>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/account/add' element={<AddAccount />}></Route>
                    <Route path='/product/add' element={<AddProduct />}></Route>
                    <Route path='/product/edit/:id' element={<AddProduct />}></Route>
                    <Route path='/account/edit/:username' element={<AddAccount />}></Route>
                    <Route path='/account/manager' element={<AccountManage />}></Route>
                    <Route path='/product/manager' element={<ProductManage />}></Route>
                    <Route path='/order/manager' element={<OrderManage />}></Route>
                    <Route path='/forgotpassword' element={'<h1>forgotpassword</h1>'}></Route>
                    <Route path='/signup' element={'<h1>signup</h1>'}></Route>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}