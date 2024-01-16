const initialState = {
    loading: false,
    products: [],
    error: ''
}

const productsReducer = (state=initialState, action) => {
        switch(action.type) {
            case 'FETCH-PRODUCTS-REQUEST':
                return {
                    ...state,
                    loading: true
                }
            case 'FETCH-PRODUCTS-SUCCESS':
                return {
                    ...state,
                    loading: false,
                    products: action.payload
                }
            case 'FETCH-PRODUCTS-ERROR':
                return {
                    ...state,
                    loading: false,
                    products: action.payload
                }
            default: return state
        }
}

export default productsReducer;