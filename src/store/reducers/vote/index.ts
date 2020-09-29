import { combineReducers } from 'redux';
import { createdVoteDetail } from 'store/reducers/vote/createdVoteDetail';

export const vote = combineReducers({ createdVoteDetail })
