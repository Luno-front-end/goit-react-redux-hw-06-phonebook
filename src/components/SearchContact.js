import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import phonebookActions from "../Redux/phonebook/phonebook-actions";

import s from "./PhoneBock.module.css";
import { connect } from "react-redux";

function SearchContact({ value, searchContact }) {
  const id = shortid.generate();
  return (
    <div className={s.containerSearch}>
      <label className={s.labelSearch} htmlFor={id}>
        Поиск контакта по имени
      </label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={searchContact}
        id={id}
        className={s.inputSearch}
      ></input>
    </div>
  );
}
// SearchContact.propTypes = {
//   velue: PropTypes.string.isRequired,
//   SearchContact: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  searchContact: (e) => dispatch(phonebookActions.veluesFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContact);
