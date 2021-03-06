import { CHANGE_SEARCH_FIELD } from "./constants";

const initalState = {
  searchField: "",
};

export const searchRobots = (state = initalState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload }; // ... is a spread operator to make
    // a copy of tha state and then we change whatever we want!
    default:
      return state;
  }
};
