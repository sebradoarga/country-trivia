import React from "react";
import CartStyles from "./Cart.module.css";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <div className={CartStyles.container}>
      <button className={CartStyles.btn} aria-label="cart button">
        <FaShoppingCart />
      </button>
      <p className={CartStyles.value} aria-label="number of items in cart">0</p>
    </div>
  );
};

export default Cart;
