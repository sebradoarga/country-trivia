import React from "react";
import Header from "../Header/Header";
import Table from "../Table/Table";

const Home = ({
  searchText,
  setSearchText,
  loading,
  error,
  countries,
  searchedCountry,
  countryError,
  clickedCountry,
  setClickedCountry,
}) => {
  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Table
        loading={loading}
        error={error}
        countries={countries}
        searchText={searchText}
        searchedCountry={searchedCountry}
        countryError={countryError}
        clickedCountry={clickedCountry}
        setClickedCountry={setClickedCountry}
      />
    </>
  );
};

export default Home;
