const defaultState = {
  cart: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INSERT_COUNTRY":
      const incomingCountry = action.payload;
      const incomingName = incomingCountry.name;
      const existCountry = state.cart.find((country) => {
        if (incomingName === country.name) {
          return true;
        }

        return false;
      });

      if (existCountry) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, incomingCountry],
        };
      }

    case "REMOVE_COUNTRY":
      return {
        ...state,
        cart: [{ countryName: "Finland" }],
      };

    default:
      return state;
  }
};

export default reducer;
