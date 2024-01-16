import React, { useEffect } from 'react';
import styles from './Store.module.css';
import { useSelector, useDispatch } from 'react-redux';

//redux
import { fetchProducts } from '../redux/Products/productsAction';

//components
import Product from './shared/Product';

const Store = () => {

    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        if(!productsState.products.length) dispatch(fetchProducts())
        // if is used for stop the function to download the data every time we go forth and back
    },[])
    
    return (
        <div className={styles.Container}>
            <div className={styles.ProductsContainer} >
                {
                    productsState.loading ? 
                    <p>loading...</p>:
                    productsState.error ?
                    <p>something went wrong refresh the page</p>:
                    productsState.products.map(product => <Product 
                        key={product.id} productData={product} />) 
                }
            </div>
        </div>
    );
};

export default Store;