import { combineReducers } from 'redux';

import { someReducer } from 'store/reducers/someFeature/someReducer';
import { someEpicReducer } from 'store/reducers/someFeature/someEpicReducer';

export const someFeatureReducer = combineReducers({ someReducer, someEpicReducer })
