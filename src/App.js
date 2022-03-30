
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterManager from './component/Router-manager';
import { useEffect } from 'react';
import { getAllAccount } from './api/account-instance';
import { getAllAccountCreator } from './redux/actionCreator/accountCreator';
import { useDispatch } from 'react-redux';




function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      getAllAccount().then(resp => {
        console.log('get from api', resp.data)
        dispatch(getAllAccountCreator(resp.data))
      });
    } catch (e) {
      console.log('Failed', e)
    }
  }, []);
  return (
    <div className="App">
      <RouterManager />
    </div>
  );
}

export default App;
