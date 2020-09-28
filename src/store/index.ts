import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'store/reducers';

export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === 'development',
})
