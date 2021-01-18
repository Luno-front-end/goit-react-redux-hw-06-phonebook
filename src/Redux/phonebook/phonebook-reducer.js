import { combineReducers } from "redux";

import types from "./phonebook-types";

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [payload, ...state];
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
  console.log(payload);
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.VALUES_FILTER:
      return payload;

    default:
      return state;
  }
};
export default combineReducers({
  contacts,
  filter,
});
// () => JSON.parse(localStorage.getItem("contacts")) ?? [];
