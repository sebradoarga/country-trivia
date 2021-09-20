const defaultState = {
  cart: [],
  countries: [],
  country: {},
  error: null,
};

const reducer = (state = defaultState, action) => {
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
      const countryData = action.payload[0];
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

    default:
      return state;
  }
};

export default reducer;
