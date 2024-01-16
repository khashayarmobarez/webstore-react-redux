import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './ProductsDetails.module.css'

const ProductDetails = () => {

    const { id } = useParams();
    const data = useSelector(state => state.productsState.products);
    const product = data[id - 1];
    const {image,title,price,description ,category} = product

    return (
        <div className={styles.container}>
            <div className={styles.productContainer}>

                <img src={image} alt='productimage' />

                <div className={styles.productData}>
                    <h2 style={{fontSize:'20px'}}>{title}</h2>
                    <p style={{fontSize:'16px'}}>{description}</p>
                    <p style={{fontSize:'17px'}}><span>categories: </span>{category}</p>
                        <div className={styles.buttons} >
                            <span className={styles.price}>{price} $</span>
                            <Link to='/products' className={styles.homeLink}>back to store</Link>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;