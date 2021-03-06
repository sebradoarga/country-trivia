import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeCountry } from "../../../redux/action";
import { RootState } from "../../../redux/reducers";

const FavoritedCountry = ({ flag, name }: { flag: string; name: string }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.themeReducer.theme);
  const handleClick = (name: string) => {
    dispatch(removeCountry(name));
  };

  const changeTheme = theme === "dark" ? "dark-mode" : "";

  return (
    <Container>
      <Image src={flag} className={changeTheme} />
      <Name>
        <Link
          to={`/country/${name}`}
          style={theme === "dark" ? { color: "white" } : { color: "#4c9757" }}
        >
          {name}
        </Link>
      </Name>
      <RemoveBtn onClick={() => handleClick(name)} className={changeTheme}>
        <FaTrash />
      </RemoveBtn>
    </Container>
  );
};

const Container = styled.div`
  background: transparent;
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

  &.dark-mode {
    border-color: white;
  }
`;

const Name = styled.h3`
  font-size: 1.8rem;
  transition: all 0.3s ease;
  text-align: center;
  margin: 0 0.5rem;

  &:hover {
    transform: scale(1.1);
  }

  &.dark-mode {
    color: white;
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

  &.dark-mode {
    color: white;

    &:hover {
      color: #4c9757;
      cursor: pointer;
    }
  }
`;

export default FavoritedCountry;
