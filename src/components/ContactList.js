import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phonebookActions from "../Redux/phonebook/phonebook-actions";

import s from "./PhoneBock.module.css";

function СontactList({ contactList, onDeleted }) {
  return (
    <ul className={"js-list"}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}: </span>
            <span>
              +38 <a href={`tel: ${number}`}>{number}</a>
            </span>
            <button
              className={s.btnList}
              type="button"
              onClick={() => onDeleted(id)}
            >
              Видалити
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const getFilterContacts = (allContacts, filterS) => {
  const normalizeFilter = filterS.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
};
const mapStateToProps = ({ phonebook: { contacts, filterS } }) => ({
  contactList: getFilterContacts(contacts, filterS),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleted: (id) => dispatch(phonebookActions.onDeleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(СontactList);
