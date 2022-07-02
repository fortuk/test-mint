import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.phoneBook.loading;
export const getContacts = state => state.phoneBook.contactsItems;
export const getFilter = state => state.filter;

export const getFilterContacts = createSelector(
    [getContacts, getFilter],
    (items, filter) =>
    items.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase()),
    ),
);