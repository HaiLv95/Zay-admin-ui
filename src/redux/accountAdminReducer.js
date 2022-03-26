const initState = {
    accounts: []
}

const accountAdminReducer = (state = initState, action) => {

    switch (action.type) {
        case 'admin/account/add':
            return {

            };
        case 'admin/account/update':
            return {

            };
        case 'admin/account/delete':
            return {

            };

        default:
            return state;
    }
}
export default accountAdminReducer;

