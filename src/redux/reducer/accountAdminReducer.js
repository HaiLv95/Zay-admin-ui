const initState = {
    filters: {},
    accounts: []
}

export default function accountAdminReducer(state = initState, action) {
    console.log(action.type, action.payload)
    /*
        //b1: copy lai list accounts
            ...state,
        //b2: them account vao list
            accounts:[
                ...state.accounts, action.payload
    */
    switch (action.type) {
        case 'admin/addAccount':
            return {
                ...state,
                accounts: [
                    ...state.accounts, action.payload
                ]
            };
        case 'admin/updateAccount':
            return {
                ...state,
                accounts: state.accounts.map(item => item.username === action.payload.username ? action.payload : item)

            };
        case 'admin/lockAccount':
            return {
                ...state,
                accounts: state.accounts.map(item => item.username === action.payload ? (item.activated = !item.activated) : item)
            };

        case 'admin/getAllAccount':
            return {
                accounts: action.payload
            }

        default:
            return state;
    }

}

