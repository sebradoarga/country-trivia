import styled from "styled-components";

const LoadingMessage = () => {
  return <Message>Fetching countries...</Message>;
};

const Message = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin-top: 5rem;
`;

export default LoadingMessage;
