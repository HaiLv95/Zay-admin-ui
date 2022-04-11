const initState = {
    categories: []
}

export default function categoryReducer(state = initState, action) {
    console.log('payload', action.payload)
    console.log('type', action.type)
    /*
        //b1: copy lai list product
            ...state,
        //b2: them product vao list
            state:[...state, action.payload]
    */
    switch (action.type) {
        case 'addCategory':
            return {
                ...state,
                categories: [
                    ...state.categories, action.payload
                ]
            };
        case 'updateCategory':
            return {
                ...state,
                categories: state.categories.map(item => item.id === action.payload.id ? action.payload : item)

            };

        case 'getAllCategory':
            return {
                categories: action.payload
            }

        case 'removeAllCategory':
            return {
                ...state,
                categories: []
            }

        default:
            return state;
    }

}

