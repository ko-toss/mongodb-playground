import { combineReducers } from 'redux';
import { someFeatureReducer } from 'store/reducers/someFeature';

export const rootReducer = combineReducers({
  someFeatureReducer
})

export type RootState = ReturnType<typeof rootReducer>
