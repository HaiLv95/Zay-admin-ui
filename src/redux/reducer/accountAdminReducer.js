const initState = {
    accounts: []
}

export default function accountAdminReducer(state = initState, action) {
    console.log('payload', action.payload)
    console.log('type', action.type)
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

        case 'admin/getAllAccount':
            return {
                accounts: action.payload
            }

        case 'admin/removeAllAccount':
            return{
                ...state,
                accounts:[]
            }

        default:
            return state;
    }

}

