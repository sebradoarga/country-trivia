import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeCountry } from "../../../redux/action";

const FavoritedCountry = ({ flag, name }) => {
  const dispatch = useDispatch();
  const handleClick = (name) => {
    console.log("removing country");
    dispatch(removeCountry(name));
  };

  return (
    <Container>
      <Image src={flag} />
      <Name>
        <Link to={`/country/${name}`} style={{ color: "#4c9757" }}>
          {name}
        </Link>
      </Name>
      <RemoveBtn onClick={() => handleClick(name)}>
        <FaTrash />
      </RemoveBtn>
    </Container>
  );
};

const Container = styled.div`
  background: #fafafa;
  width: 100%;
  border-radius: 10px;
  margin: 2rem 0;
  color: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 25%;
  border: 1px solid #222;
`;

const Name = styled.h3`
  font-size: 1.8rem;
  transition: all 0.3s ease;
  text-align: center;
  margin: 0 0.5rem;

  &:hover {
    transform: scale(1.1);
  }
`;

const RemoveBtn = styled.button`
  background: transparent;
  border: none;
  color: #222;
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #4c9757;
    cursor: pointer;
  }
`;

export default FavoritedCountry;
