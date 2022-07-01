import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const myActionAddContact = createAction('addContact', function prepare(
  contact
) {
  return {
    payload: { ...contact, id: shortid.generate() },
  };
});

const myActionDeleteContact = createAction('deleteContactAction');

// const myActionFilterContact = createAction('filterContact');

const actions = {
  myActionAddContact,
  myActionDeleteContact,
  // myActionFilterContact,
};
export default actions;
