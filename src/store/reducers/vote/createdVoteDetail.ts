import { createReducer } from '@reduxjs/toolkit';
import { createVoteRes } from 'store/actions/vote';

export const createdVoteDetail = createReducer(null, builder => {
  builder.addCase(createVoteRes, (state, action) => {
    return action.payload
  })
})
