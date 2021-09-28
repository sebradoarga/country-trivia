const defaultState = {
  criteria: ["Name A-Z", "Name Z-A", "Population Asc", "Population Desc"],
  sort: "Name A-Z",
};

const tableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SORT_TABLE":
      const newSort = action.payload;
      return {
        ...state,
        sort: newSort,
      };

    default:
      return state;
  }
};

export default tableReducer;
