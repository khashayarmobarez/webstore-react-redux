import axios from "axios"

const fetchProductsRequest = () => {
    return {
        type: 'FETCH-PRODUCTS-REQUEST'
    }
}


const fetchProductsSuccess = products => {
    return {
        type: 'FETCH-PRODUCTS-SUCCESS',
        payload: products
    }
}

const fetchProductsError = error => {
    return {
        type: 'FETCH-PRODUCTS-ERROR',
        payload: error
    }
}

export const fetchProducts = () => {
        return (dispatch) => {
            dispatch(fetchProductsRequest())
            axios.get('https://fakestoreapi.com/products')
            .then(response =>{
                const products = response.data;
                dispatch(fetchProductsSuccess(products))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchProductsError(errorMessage))
            })
        }
}