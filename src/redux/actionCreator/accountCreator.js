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
export const deleteAccountCreator= (data) => {
    return {
        type: 'admin/deleteAccount',
        payload: data
    }
}
export const getAllAccountCreator = (data) => {
    return {
        type: 'admin/getAllAccount',
        payload: data
    }
}