export const favoriteCountry = (country) => {
  return {
    type: "INSERT_COUNTRY",
    payload: country,
  };
};

export const removeCountry = (countryName) => {
  return {
    type: "REMOVE_COUNTRY",
    payload: countryName,
  };
};

export const getCountries = () => {
  return async (dispatch) => {
    try {
      const data = await fetch("https://restcountries.com/v2/all");
      const countriesList = await data.json();
      dispatch(fetchCountriesSuccess(countriesList));
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};

export const fetchCountriesSuccess = (data) => {
  return {
    type: "FETCH_COUNTRIES_SUCCESS",
    payload: data,
  };
};

// -----
export const getOneCountry = (countryName) => {
  return async (dispatch) => {
    const data = await fetch(
      `https://restcountries.com/v2/name/${countryName}`
    );

    const country = await data.json();
    dispatch(fetchOneCountrySuccess(country));
  };
};

export const fetchOneCountrySuccess = (data) => {
  return {
    type: "FETCH_ONE_COUNTRY_SUCCESS",
    payload: data,
  };
};

export const fetchError = (error) => {
  return {
    type: "FETCH_ERROR",
    payload: error,
  };
};

export const changeTheme = () => {
  return {
    type: "CHANGE_THEME",
  };
};

export const sortTable = (criterium) => {
  return {
    type: "SORT_TABLE",
    payload: criterium,
  };
};

export const getSortedCountries = () => {
  return {
    type: "GET_SORTED_COUNTRIES",
  };
};
