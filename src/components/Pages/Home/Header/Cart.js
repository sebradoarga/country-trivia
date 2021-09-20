import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Cart = ({ setExpanded }) => {
  const cart = useSelector((state) => state.cart);

  const clickHandler = () => {
    setExpanded(true);
  };

  return (
    <Container>
      <CartBtn aria-label="cart button" onClick={clickHandler}>
        <FaStar />
      </CartBtn>
      <Value aria-label="number of items in cart">{cart.length}</Value>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  background: #4c9757;
  width: 5rem;
  border-radius: 5px;
  margin: 0 10rem;
  padding: 0 1rem 0 0;
`;

const CartBtn = styled.button`
  background: transparent;
  border: none;
  color: white;
  padding: 1rem;
  font-size: 2rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Value = styled.p`
  color: white;
  font-size: 2rem;
  padding: 1rem;
  background: #4c9757;
  border-radius: 5px;
`;

export default Cart;
