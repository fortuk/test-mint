import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from 'redux/auth/authApi';
import { filterReducer } from 'redux/phonebook/phonebook-reducer';
import { tokenReducer } from 'redux/auth/token-reduser';

const customMiddleWare = store => next => action => {
  console.log('state', store.getState());
  console.log('Middleware triggered:', action);
  next(action);
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLogged'],
};
const persistedReduser = persistReducer(authPersistConfig, tokenReducer);

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  filterContact: filterReducer,
  token: persistedReduser,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(customMiddleWare)
      .concat(authApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

const persistor = persistStore(store);
export { store, persistor };
