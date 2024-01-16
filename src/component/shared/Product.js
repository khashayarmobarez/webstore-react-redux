import React from 'react';
import styles from './Product.module.css';
import { Link } from 'react-router-dom';
import trashIcon from '../../Assets/icons/trash-fill.svg'

// redux 
import { useSelector, useDispatch } from 'react-redux';
import {addItem, removeItem, increase, decrease} from '../../redux/Cart/cartAction';


// functions
import { shorten, isInCart, quantityCount } from '../../helpers/functions';



const Product = ({productData}) => {

    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    return (
        <div className={styles.container}>
            <img  src={productData.image} alt={productData.title} />
            <h2>{shorten(productData.title)}</h2>
            <p>{productData.price} $</p>
            <div className={styles.buttonsContainer}>
                <Link className={styles.Link} to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttons}>
                        {quantityCount(state,productData.id) === 1 && <button onClick={() => dispatch(removeItem(productData))}><img src={trashIcon} alt='trash'/></button>}
                        {quantityCount(state,productData.id) > 1 && <button className={styles.plusminus} onClick={() => dispatch(decrease(productData))}>-</button>}
                        {quantityCount(state,productData.id) > 0 && <span>{quantityCount(state,productData.id)}</span>  }
                        {
                        isInCart(state,productData.id) ? 
                        <button className={styles.plusminus} onClick={() => dispatch(increase(productData))}>+</button> :
                        <button onClick={() => dispatch(addItem(productData))}>Add item</button> 
                         }
                </div>
            </div>
        </div>
    );
};

export default Product;