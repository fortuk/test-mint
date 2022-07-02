import { configureStore } from '@reduxjs/toolkit';
import contactsSlice, { filterReducer } from './contacts/phone-book/contacts-reducer';

const store = configureStore({
    reducer: {
        phoneBook: contactsSlice,
        filter: filterReducer,
    },
});

export default store;