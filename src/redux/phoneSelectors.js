import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.isLoading;
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.dataContacts;
//-----------------поиск по фильтру
const getVisisbleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normoliseFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normoliseFilter),
    );
  },
);

const phoneSelectors = { getContacts, getFilter, getVisisbleContacts };

export default phoneSelectors;

//другой способ
// const getVisisbleContacts = state => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normoliseFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normoliseFilter),
//   );
// };
