const defaultState = {
  theme: "light",
};

const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      let newTheme = "";
      if (state.theme === "light") {
        newTheme = "dark";
      } else {
        newTheme = "light";
      }
      return {
        ...state,
        theme: newTheme,
      };

    default:
      return state;
  }
};

export default themeReducer;
