import styled from "styled-components";
import { sortTable } from "../../../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const SortDropdown = () => {
  const dispatch = useDispatch();
  const criteria = useSelector((state) => state.countryReducer.criteria);
  const handleSelect = (e) => {
    console.log("target.value", e.target.value);
    dispatch(sortTable(e.target.value));
  };

  return (
    <Menu onChange={(e) => handleSelect(e)}>
      {criteria.map((criterium) => (
        <option key={criterium} value={criterium}>
          {criterium}
        </option>
      ))}
    </Menu>
  );
};

const Menu = styled.select`
  max-width: 11rem;
  padding: 0.3rem;
`;

export default SortDropdown;
