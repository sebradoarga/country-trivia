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
  return async (dispatch, getState) => {
    try {
      const data = await fetch("https://restcountries.eu/rest/v2/all");
      const countriesList = await data.json();
      console.log("countries", countriesList);

      dispatch(fetchCountriesSuccess(countriesList));
    } catch (error) {
      console.log("error", error);
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
  return async (dispatch, getState) => {
    const data = await fetch(
      `https://restcountries.eu/rest/v2/name/${countryName}`
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
