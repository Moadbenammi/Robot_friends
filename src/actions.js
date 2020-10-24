import { CHANGE_SEARCH_FIELD } from "./constants"; // It's better to make a separate file of constants.

export const setSearchField = (text) => ({    //Action is an aboject with a property of type.
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
