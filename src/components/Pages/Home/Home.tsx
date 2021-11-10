import { useState } from "react";
import Header from "./Header/Header";
import ExpandedCart from "./ExpandedCart";
import Table from "./Table/Table";

const Home = ({ windowWidth }: { windowWidth: number }) => {
  const [searchText, setSearchText] = useState("");
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        setExpanded={setExpanded}
      />
      <Table searchText={searchText} windowWidth={windowWidth} />
      <ExpandedCart expanded={expanded} setExpanded={setExpanded} />
    </>
  );
};

export default Home;
