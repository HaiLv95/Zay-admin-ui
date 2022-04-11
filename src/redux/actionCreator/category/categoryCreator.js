export const addCategoryCreator = (data) => {
    return {
        type: 'addCategory',
        payload: data
    }
}

export const updateCategoryCreator = (data) => {
    return {
        type: 'updateCategory',
        payload: data
    }
}
export const getAllCategoryCreator = (data) => {
    return {
        type: 'getAllCategory',
        payload: data
    }
}
export const removeAllCategoryCreator = () => {
    return {
        type: 'removeAllCategory'
    }
}