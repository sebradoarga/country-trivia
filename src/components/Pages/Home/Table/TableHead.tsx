import TableHeadCell from "./TableHeadCell";
import styled from "styled-components";

const TableHead = ({ windowWidth }: { windowWidth: number }) => {
  return (
    <thead>
      <Row>
        <TableHeadCell text={"Flag"} windowWidth={windowWidth} />
        <TableHeadCell text={"Name"} windowWidth={windowWidth} />
        <TableHeadCell text={"Population"} windowWidth={windowWidth} />
        <TableHeadCell text={"Region"} windowWidth={windowWidth} />
        <TableHeadCell text={"Languages"} windowWidth={windowWidth} />
        <TableHeadCell text={""} windowWidth={windowWidth} />
      </Row>
    </thead>
  );
};

const Row = styled.tr`
  background-image: linear-gradient(45deg, #4c9757, #009573);
`;

export default TableHead;
