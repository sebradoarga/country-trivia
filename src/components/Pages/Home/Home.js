import { useState } from "react";
import Header from "../../Header/Header";
import Table from "./Table/Table";

const Home = ({ error, countries }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Table error={error} countries={countries} searchText={searchText} />
    </>
  );
};

export default Home;
