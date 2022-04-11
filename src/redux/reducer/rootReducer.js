import { combineReducers } from 'redux';
import accountAdminReducer from './accountAdminReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    accountAdmin: accountAdminReducer,
    product: productReducer,
    category: categoryReducer
})

export default rootReducer;