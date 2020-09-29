import { combineReducers } from 'redux';
import { someFeatureReducer } from 'store/reducers/someFeature';
import { vote } from 'store/reducers/vote';

export const rootReducer = combineReducers({
  someFeatureReducer,
  vote
})

export type RootState = ReturnType<typeof rootReducer>
