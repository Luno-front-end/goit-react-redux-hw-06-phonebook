import { combineReducers } from "redux";

import types from "./phonebook-types";

const constacts = (state = [], { type, payload }) => {
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
const filterS = (state = "", { type, payload }) => {
  switch (type) {
    case types.VALUES_FILTER:
      return payload;

    default:
      return state;
  }
};
export default combineReducers({
  constacts,
  filterS,
});
// () => JSON.parse(localStorage.getItem("contacts")) ?? [];
