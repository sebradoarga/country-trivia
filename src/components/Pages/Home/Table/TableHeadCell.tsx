import styled from "styled-components";
import SortDropdown from "./SortDropdown";

const TableHeadCell = ({
  text,
  windowWidth,
  setValue,
  value,
}: {
  text: string;
  windowWidth: number;
  setValue: any;
  value: number;
}) => {
  return (
    <Cell
      className={
        windowWidth !== 0
          ? windowWidth < 768 &&
            (text === "Population" || text === "Region" || text === "Languages")
            ? "hidden"
            : windowWidth < 900 && (text === "Region" || text === "Languages")
            ? "hidden"
            : windowWidth < 1200 && text === "Languages"
            ? "hidden"
            : ""
          : ""
      }
    >
      {text === "" ? <SortDropdown setValue={setValue} value={value} /> : text}
    </Cell>
  );
};

const Cell = styled.th`
  font-size: 2rem;
  padding: 2rem 1rem;
  text-transform: uppercase;
  color: white;

  &:first-child {
    width: 24%;
  }

  &:last-child {
    width: 13rem;
  }
`;

export default TableHeadCell;
