import errorImage from "../images/error-image.png";
import styled from "styled-components";

const ErrorMessage = () => {
  return (
    <Container>
      <Text>Oops, something went wrong.</Text>
      <Image
        src={errorImage}
        alt="Cartoon of confused man surrounded by question marks"
      />
    </Container>
  );
};

const Image = styled.img`
  width: 27rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
`;

const Text = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #4c9757;
`;

export default ErrorMessage;
