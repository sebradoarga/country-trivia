export const insertCart = (country) => {
  return {
    type: "INSERT_COUNTRY",
    payload: country,
  };
};

export const remove = (countryName) => {
  return {
    type: "REMOVE_COUNTRY",
    payload: countryName,
  };
};
