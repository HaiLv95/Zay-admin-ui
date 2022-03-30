import { combineReducers } from 'redux';
import accountAdminReducer from './accountAdminReducer';

const rootReducer = combineReducers({
    accountAdmin: accountAdminReducer
})

export default rootReducer;