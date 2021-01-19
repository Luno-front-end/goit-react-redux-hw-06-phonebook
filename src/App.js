// import { useState, useEffect } from "react";
// import shortid from 'shortid';
import s from "./components/PhoneBock.module.css";

import Form from "./components/Form";
import ContactList from "./components/ContactList";
import SearchContact from "./components/SearchContact";

export default function Mobile() {
  return (
    <div className={s.container}>
      <h1 className={s.headingForm}>Телефонна книга</h1>
      <Form />
      {/* <Form onSubmit={addContact} contactList={onCheckName} /> */}
      {/* <SearchContact velue={filter} SearchContact={veluesFilter} /> */}
      {/* <ContactList contactList={getFilter()} onDeleted={deletedContact} /> */}
      <h2 className={s.contactList}>Контакти</h2>
      <SearchContact />
      <ContactList />
    </div>
  );
}
