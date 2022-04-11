export const addAccountCreator = (data) => {
    return {
        type: 'admin/addAccount',
        payload: data
    }
}

export const updateAccountCreator = (data) => {
    return {
        type: 'admin/updateAccount',
        payload: data
    }
}
export const getAllAccountCreator = (data) => {
    return {
        type: 'admin/getAllAccount',
        payload: data
    }
}
export const removeAllAccountCreator = () => {
    return {
        type: 'admin/removeAllAccount'
    }
}