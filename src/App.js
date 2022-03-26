
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/boostrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './component/navBar';
import './js/templatemo.min.js';
import './js/jquery-migrate-1.2.1.min.js';
import './js/jquery-1.11.0.min.js';
import './js/custom.js'
import './css/admin.css'
import './css/custom.css'
import './css/fontawesome.min.css'
import './css/slick-theme.min.css'
import './css/slick.min.css'
import './css/templatemo.min.css'




function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/home' exact element={'<h1>home</h1>'}></Route>
            <Route path='/shop' exact element={'<h1>shop</h1>'}></Route>
            <Route path='/shopping-cart' exact element={'<h1>shoppong cart</h1>'}></Route>
            <Route path='/signup' exact element={'<h1>signup</h1>'}></Route>
            <Route path='/login' exact element={'<h1>login</h1>'}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
