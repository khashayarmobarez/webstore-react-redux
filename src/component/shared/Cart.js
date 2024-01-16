import React from 'react';
import styles from './Cart.module.css';

import trashIcon from '../../Assets/icons/trash-fill.svg';

//functions
import { shorten } from '../../helpers/functions';

// redux 
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../../redux/Cart/cartAction';

const Cart = (props) => {

    const {image, title, price, quantity} = props.data;

    const dispatch = useDispatch()

    return (
        <div className={styles.Container}>
            <img src={image} alt='product' style={{width: '5rem'}}/>
            <div className={styles.productsTitle}>
                <h3>{shorten(title)}</h3>
                <h2>{price} $</h2>
            </div>
            <span>{quantity}</span>
            <div className={styles.buttons}>
                    { quantity > 1 ?
                    <button onClick={() => dispatch(decrease(props.data))}>-</button>:
                    <button onClick={() => dispatch(removeItem(props.data))}><img src={trashIcon} alt='trash' style={{width: '20px'}}/></button> }
                <button onClick={() => dispatch(increase(props.data))}>+</button>
            </div>
        </div>
    );
};

export default Cart;