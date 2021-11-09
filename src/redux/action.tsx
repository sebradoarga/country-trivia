import { Country } from "./types";

export const INSERT_COUNTRY = "INSERT_COUNTRY";
export const REMOVE_COUNTRY = "REMOVE_COUNTRY";
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS";
export const FETCH_ONE_COUNTRY_SUCCESS = "FETCH_ONE_COUNTRY_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const CHANGE_THEME = "CHANGE_THEME";
export const SORT_TABLE = "SORT_TABLE";
export const GET_SORTED_COUNTRIES = "GET_SORTED_COUNTRIES";

export const favoriteCountry = (country: Country) => {
  return {
    type: INSERT_COUNTRY,
    payload: country,
  };
};

export const removeCountry = (countryName: string) => {
  return {
    type: REMOVE_COUNTRY,
    payload: countryName,
  };
};

export const getCountries = () => {
  return async (dispatch: any) => {
    try {
      const data = await fetch("https://restcountries.com/v2/all");
      const countriesList = (await data.json()) as Country[];
      dispatch(fetchCountriesSuccess(countriesList));
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};

export const fetchCountriesSuccess = (data: Country[]) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: data,
  };
};

// -----
export const getOneCountry = (countryName: string | undefined) => {
  return async (dispatch: any) => {
    const data = await fetch(
      `https://restcountries.com/v2/name/${countryName}`
    );

    const country = (await data.json()) as Country;
    dispatch(fetchOneCountrySuccess(country));
  };
};

export const fetchOneCountrySuccess = (data: Country) => {
  return {
    type: FETCH_ONE_COUNTRY_SUCCESS,
    payload: data,
  };
};

export const fetchError = (error: any) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

export const changeTheme = () => {
  return {
    type: CHANGE_THEME,
  };
};

export const sortTable = (criterium: string) => {
  return {
    type: SORT_TABLE,
    payload: criterium,
  };
};

export const getSortedCountries = () => {
  return {
    type: GET_SORTED_COUNTRIES,
  };
};

type FetchError = {
  type: "FETCH_ERROR";
  payload: any;
};

type FetchOneCountrySuccess = {
  type: "FETCH_ONE_COUNTRY_SUCCESS";
  payload: Country;
};

type FavoriteCountry = {
  type: "INSERT_COUNTRY";
  payload: Country;
};

type FetchCountriesSuccess = {
  type: "FETCH_COUNTRIES_SUCCESS";
  payload: Country[];
};

type ChangeTheme = {
  type: "CHANGE_THEME";
};

type SortTable = {
  type: "SORT_TABLE";
  payload: string;
};

type GetSortedCountries = {
  type: "GET_SORTED_COUNTRIES";
};

type RemoveCountry = {
  type: "REMOVE_COUNTRY";
  payload: string;
};

export type AllActions =
  | FetchError
  | FetchOneCountrySuccess
  | FavoriteCountry
  | RemoveCountry
  | FetchCountriesSuccess
  | ChangeTheme
  | SortTable
  | GetSortedCountries;
