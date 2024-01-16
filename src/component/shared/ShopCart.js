import React from 'react';
import styles from './ShopCart.module.css'

import { Link } from 'react-router-dom'

import Cart from './Cart';

//redux
import { useSelector, useDispatch } from 'react-redux';
import {checkOut, clear}    from '../../redux/Cart/cartAction';

const ShopCart = () => {

    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    return (
        <div className={styles.container}>
            <div className={styles.items}>
                {state.selectedItems.map(item => <Cart  key={item.id} data={item} />)}
            </div>

                {state.itemCounter > 0 && <div className={styles.checkoutSection}>
                    <div className={styles.itemsNumber}>
                        <p><span>total amount of items:</span> {state.itemCounter} </p>
                        <p><span>total price of items:</span> {state.total} $</p>
                    </div>

                        <div className={styles.buttons}>
                            <button className={styles.butt1} onClick={() => dispatch(checkOut()) }>check out</button>
                            <button className={styles.butt2} onClick={() => dispatch(clear()) }>Clear</button>
                        </div>
                    </div>} 

            {
            state.checkout && 
                <div className={styles.checkout}>
                    <h1>checked out successfully</h1>
                    <Link className={styles.backButton} to='/products' >buy more</Link>
                </div>
            }

            {
            !state.checkout && state.itemCounter === 0 && 
                <div className={styles.checkClear}>
                    <h1>cleared out</h1>
                    <Link className={styles.backButton} to='/products' >go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;