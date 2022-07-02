import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = '';

const filterSlice = createSlice({
  name: 'filterContact',
  initialState: initialStateFilter,
  reducers: {
    myActionFilterContact: (_, { payload }) => payload,
    resetFilter: () => initialStateFilter,
  },
});

export const { myActionFilterContact, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
