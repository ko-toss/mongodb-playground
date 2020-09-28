import { combineReducers } from 'redux';
import { someReducer } from 'store/reducers/someFeature';

export const rootReducer = combineReducers({
  someFeature: someReducer
})

export type RootState = ReturnType<typeof rootReducer>
