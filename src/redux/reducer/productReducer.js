const initState = {
    products:[]
}

export default function productReducer(state = initState, action) {
    console.log('payload', action.payload)
    console.log('type', action.type)
    /*
        //b1: copy lai list product
            ...state,
        //b2: them product vao list
            state:[...state, action.payload]
    */
    switch (action.type) {
        case 'addProduct':
            return {
                ...state,
                products: [
                    ...state.products, action.payload
                ]
            };
        case 'updateProduct':
            return {
                ...state,
                products: state.products.map(item => item.id === action.payload.id ? action.payload : item)

            };

        case 'getAllProduct':
            return {
                products: action.payload
            }

        case 'removeAllProduct':
            return {
                ...state,
                products: []
            }

        default:
            return state;
    }

}

