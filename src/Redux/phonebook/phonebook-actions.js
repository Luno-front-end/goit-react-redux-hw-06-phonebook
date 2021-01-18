import types from "./phonebook-types";
import shortid from "shortid";

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const onDeleted = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const veluesFilter = (value) => ({
  type: types.VALUES_FILTER,
  payload: value,
});

export default { addContact, onDeleted, veluesFilter };
