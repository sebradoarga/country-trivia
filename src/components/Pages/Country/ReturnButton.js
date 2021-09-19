import React from "react";
import styled from "styled-components";

const ReturnButton = () => {
  return <Button>Go back</Button>;
};

const Button = styled.button`
  background: transparent;
  border: none;
  color: #4c9757;
  font-size: 1.5rem;
  position: absolute;
  z-index: 999;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.3rem;
  right: 7rem;
  top: 4rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default ReturnButton;
