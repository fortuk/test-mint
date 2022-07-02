import { createReducer, combineReducers } from '@reduxjs/toolkit';

import phoneActions from './phoneActions';

const dataContacts = createReducer([], {
  [phoneActions.fetchContactsSuccess]: (_, action) => action.payload,
  [phoneActions.addContactsSuccess]: (state, action) => {
    if (
      state.some(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase(),
      )
    ) {
      alert(`This contact already exists`);
      return;
    }
    return [...state, action.payload];
  },
  [phoneActions.deleteContactsSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const isLoading = createReducer(false, {
  [phoneActions.fetchContactsRequest]: () => true,
  [phoneActions.fetchContactsSuccess]: () => false,
  [phoneActions.fetchContactsError]: () => false,

  [phoneActions.addContactsRequest]: () => true,
  [phoneActions.addContactsSuccess]: () => false,
  [phoneActions.addContactsError]: () => false,

  [phoneActions.deleteContactsRequest]: () => true,
  [phoneActions.deleteContactsSuccess]: () => false,
  [phoneActions.deleteContactsError]: () => false,
});

const filter = createReducer('', {
  [phoneActions.filterContact]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [phoneActions.fetchContactsError]: (_, action) => action.payload,
  [phoneActions.fetchContactsRequest]: () => null,
});

//const error = createReducer(null, {});

export default combineReducers({
  dataContacts,
  isLoading,
  filter,
  error,
});
