import React from "react";
import CartStyles from './Cart.module.css';
import {FaShoppingCart} from 'react-icons/fa';

const Cart = () => {
  return (
    <div className={CartStyles.container}>
      <button className={CartStyles.btn}>
          <FaShoppingCart />
      </button>
      <p className={CartStyles.value}>0</p>
    </div>
  );
};

export default Cart;
