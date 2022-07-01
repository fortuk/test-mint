import { createAction } from '@reduxjs/toolkit';

//!синхронный Action который дойдет до reducer

//в ожидании (pending)
const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
//выполнено (fulfilled)
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
//отклоненный (rejected)
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactsRequest = createAction('contacts/addContactsRequest');
const addContactsSuccess = createAction('contacts/addContactsSuccess');
const addContactsError = createAction('contacts/addContactsError');

const deleteContactsRequest = createAction('Contacts/deleteContactsRequest');
const deleteContactsSuccess = createAction('Contacts/deleteContactsSuccess');
const deleteContactsError = createAction('Contacts/deleteContactsError');

const filterContact = createAction('Contacts/filterContact');

const phoneActions = {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  filterContact,
};
export default phoneActions;
