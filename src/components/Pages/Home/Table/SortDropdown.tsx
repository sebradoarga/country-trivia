import styled from "styled-components";
import { sortTable } from "../../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducers";
import React from "react";

const SortDropdown = () => {
  const dispatch = useDispatch();
  const criteria = useSelector(
    (state: RootState) => state.countryReducer.criteria
  );
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortTable(e.target.value));
  };

  return (
    <Menu onChange={(e) => handleSelect(e)}>
      {criteria.map((criterium: string) => (
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
