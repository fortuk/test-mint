import { createReducer, createSlice } from '@reduxjs/toolkit';
import {
    fetchContacts,
    deleteContact,
    addContact,
} from './contacts-operations';
import { changeFilter } from './contacts-actions';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contactsItems: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        //
        // Fetch
        [fetchContacts.fulfilled]: (state, { payload }) => ({
            ...state,
            contactsItems: payload,
            loading: false,
            error: null,
        }),
        [fetchContacts.rejected]: (state, { payload }) => ({
            ...state,
            loading: false,
            error: payload,
        }),
        [fetchContacts.pending]: state => ({
            ...state,
            loading: true,
            error: null,
        }),
        //
        // Delete
        [deleteContact.fulfilled]: (state, { payload }) => ({
            ...state,
            contactsItems: state.contactsItems.filter(
                ({ id }) => id !== payload,
            ),
        }),
        [deleteContact.pending]: state => ({
            ...state,
            loading: false,
            error: null,
        }),
        [deleteContact.rejected]: (state, { payload }) => ({
            ...state,
            loading: false,
            error: payload,
        }),
        //
        // Add
        [addContact.fulfilled]: (state, { payload }) => ({
            ...state,
            contactsItems: [...state.contactsItems, payload],
            loading: false,
            error: payload,
        }),
        [addContact.pending]: state => ({
            ...state,
            loading: true,
            error: null,
        }),
        [addContact.rejected]: (state, { payload }) => ({
            ...state,
            loading: true,
            error: payload,
        }),
    },
});

export default contactsSlice.reducer;

export const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});