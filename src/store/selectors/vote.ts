import { RootState } from 'store/reducers';
import { createSelector } from '@reduxjs/toolkit';
export const selectVote = (state: RootState) => state.vote

export const selectCreatedVoteDetail = createSelector(selectVote, vote => vote.createdVoteDetail)
