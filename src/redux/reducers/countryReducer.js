const defaultState = {
  cart: [],
  countries: [],
  country: {},
  error: null,
  criteria: ["Name A-Z", "Name Z-A", "Population Asc", "Population Desc"],
  sort: "Name A-Z",
};

const countryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INSERT_COUNTRY":
      const incomingCountry = action.payload;
      const incomingName = incomingCountry.name;
      const existCountry = state.cart.find(
        (country) => incomingName === country.name
      );

      if (existCountry) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, incomingCountry],
        };
      }

    case "REMOVE_COUNTRY":
      const removedCountry = action.payload;
      const newState = state.cart.filter(
        (country) => country.name !== removedCountry
      );
      console.log("newState", newState);
      console.log("state", state);
      return {
        ...state,
        cart: newState,
      };

    case "FETCH_COUNTRIES_SUCCESS":
      const countriesPayload = action.payload;
      return {
        ...state,
        countries: countriesPayload,
      };

    case "FETCH_ONE_COUNTRY_SUCCESS":
      const countryData = action.payload;
      return {
        ...state,
        country: countryData,
      };

    case "FETCH_ERROR":
      const errorFromPayload = action.payload;
      return {
        ...state,
        error: errorFromPayload,
      };

    case "SORT_TABLE":
      const newSort = action.payload;
      let sortedCountries;
      if (newSort === "Name A-Z") {
        sortedCountries = state.countries.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      } else if (newSort === "Name Z-A") {
        sortedCountries = state.countries.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        });
      } else if (newSort === "Population Asc") {
        sortedCountries = state.countries.sort(
          (a, b) => a.population - b.population
        );
      } else if (newSort === "Population Desc") {
        sortedCountries = state.countries.sort(
          (a, b) => b.population - a.population
        );
      }

      return { ...state, sort: newSort, countries: sortedCountries };

    case "GET_SORTED_COUNTRIES":
      return;

    default:
      return state;
  }
};

export default countryReducer;
