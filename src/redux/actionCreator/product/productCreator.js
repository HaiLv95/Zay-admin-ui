export const addProductCreator = (data) => {
    return {
        type: 'addProduct',
        payload: data
    }
}

export const updateProductCreator = (data) => {
    return {
        type: 'updateProduct',
        payload: data
    }
}
export const getAllProductCreator = (data) => {
    return {
        type: 'getAllProduct',
        payload: data
    }
}
export const removeAllProductCreator = () => {
    return {
        type: 'removeAllProduct'
    }
}