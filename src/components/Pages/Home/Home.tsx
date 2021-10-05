import { useState } from "react";
import Header from "./Header/Header";
import ExpandedCart from "./ExpandedCart";
import Table from "./Table/Table";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        setExpanded={setExpanded}
      />
      <Table searchText={searchText} />
      <ExpandedCart expanded={expanded} setExpanded={setExpanded} />
    </>
  );
};

export default Home;
