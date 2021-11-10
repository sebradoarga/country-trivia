import TableHeadCell from "./TableHeadCell";
import styled from "styled-components";

const TableHead = ({
  windowWidth,
  setValue,
  value,
}: {
  windowWidth: number;
  setValue: any;
  value: number;
}) => {
  return (
    <thead>
      <Row>
        <TableHeadCell
          text={"Flag"}
          windowWidth={windowWidth}
          setValue={setValue}
          value={value}
        />
        <TableHeadCell
          text={"Name"}
          windowWidth={windowWidth}
          setValue={setValue}
          value={value}
        />
        <TableHeadCell
          text={"Population"}
          windowWidth={windowWidth}
          setValue={setValue}
          value={value}
        />
        <TableHeadCell
          text={"Region"}
          windowWidth={windowWidth}
          setValue={setValue}
          value={value}
        />
        <TableHeadCell
          text={"Languages"}
          windowWidth={windowWidth}
          setValue={setValue}
          value={value}
        />
        <TableHeadCell
          text={""}
          windowWidth={windowWidth}
          setValue={setValue}
          value={value}
        />
      </Row>
    </thead>
  );
};

const Row = styled.tr`
  background-image: linear-gradient(45deg, #4c9757, #009573);
`;

export default TableHead;
