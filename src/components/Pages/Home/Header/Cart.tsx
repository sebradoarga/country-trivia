import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducers";

const Cart = ({ setExpanded }: { setExpanded: any }) => {
  const cart = useSelector((state: RootState) => state.countryReducer.cart);
  const theme = useSelector((state: RootState) => state.themeReducer.theme);

  const clickHandler = () => {
    setExpanded(true);
  };

  const changeTheme = theme === "dark" ? "dark-mode" : "";

  return (
    <Container>
      <CartBtn aria-label="cart button" onClick={clickHandler}>
        <FaStar />
      </CartBtn>
      <Value aria-label="number of items in cart" className={changeTheme}>
        {cart.length}
      </Value>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  width: 5rem;
  border-radius: 5px;
  margin: 0 10rem;
  padding: 0 1rem 0 0;
`;

const CartBtn = styled.button`
  background: transparent;
  border: none;
  color: #4c9757;
  padding: 1rem;
  font-size: 3rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #4c9757cb;
  }
`;

const Value = styled.p`
  color: #222;
  font-size: 2.5rem;
  border-radius: 5px;
  position: relative;
  bottom: 0.2rem;
  &.dark-mode {
    color: white;
  }
`;

export default Cart;