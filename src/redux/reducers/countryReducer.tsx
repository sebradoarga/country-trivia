import {
  AllActions,
  INSERT_COUNTRY,
  REMOVE_COUNTRY,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_ONE_COUNTRY_SUCCESS,
  FETCH_ERROR,
  SORT_TABLE,
  GET_SORTED_COUNTRIES,
} from "../action";
import { Country } from "../types";

type DefaultState = {
  cart: Country[];
  countries: Country[];
  country: Country | {};
  error: any;
  criteria: string[];
  sort: "Name A-Z" | "Name Z-A" | "Population Asc" | "Population Desc";
};

const defaultState: DefaultState = {
  cart: [],
  countries: [],
  country: {},
  error: null,
  criteria: ["Name A-Z", "Name Z-A", "Population Asc", "Population Desc"],
  sort: "Name A-Z",
};

const countryReducer = (state = defaultState, action: AllActions): any => {
  switch (action.type) {
    case INSERT_COUNTRY:
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

    case REMOVE_COUNTRY:
      const removedCountry = action.payload;
      const newState = state.cart.filter(
        (country) => country.name !== removedCountry
      );
      return {
        ...state,
        cart: newState,
      };

    case FETCH_COUNTRIES_SUCCESS:
      const countriesPayload = action.payload;
      return {
        ...state,
        countries: countriesPayload,
        error: null,
      };

    case FETCH_ONE_COUNTRY_SUCCESS:
      const countryData = action.payload;
      return {
        ...state,
        country: countryData,
        error: null,
      };

    case FETCH_ERROR:
      const errorFromPayload = action.payload;
      return {
        ...state,
        error: errorFromPayload,
      };

    case SORT_TABLE:
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

    case GET_SORTED_COUNTRIES:
      return;

    default:
      return state;
  }
};

export default countryReducer;
