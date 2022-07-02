import { createSlice } from '@reduxjs/toolkit';

const initialStateToken = {
  user: { name: null, email: null },
  token: '',
  isLogged: false,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState: initialStateToken,
  reducers: {
    myActionToken: (state, action) => {
      state.token = action.payload;
    },
    myActionUser: (state, action) => {
      state.user = action.payload;
    },
    loggedOn: (state, action) => {
      state.isLogged = true;
    },
    loggedOut: (state, action) => {
      state.isLogged = false;
      state.token = '';
      state.user = { name: null, email: null };
    },
  },
});

export const {
  myActionToken,
  myActionUser,
  loggedOn,
  loggedOut,
} = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
