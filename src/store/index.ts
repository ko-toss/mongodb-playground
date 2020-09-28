import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { rootReducer, RootState } from 'store/reducers';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from 'store/epics';

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState>();

export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
  devTools: process.env.NODE_ENV === 'development',
})

epicMiddleware.run(rootEpic)
