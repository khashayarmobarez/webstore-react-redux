import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

//svg
import shopCartSvg from '../../Assets/icons/shopCart.svg'

// redux
import { useSelector } from 'react-redux';

const Navbar = () => {

    const state = useSelector(state => state.cartState)

    return (
        <div className={styles.container}>
            <Link to='/products' className={styles.Products} >Products</Link>
            <div className={styles.shopCartContainer}>
                <Link to='/shopCart' className={styles.cartSvg}><img src={shopCartSvg} alt='shopcart' style={{width:'40px'}}/></Link>
                <span >{state.itemCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;