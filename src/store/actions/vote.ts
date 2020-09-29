import { createAction } from '@reduxjs/toolkit';
import { UpsertVoteReq, VoteDetail } from 'models/vote';

export const createVoteReq = createAction<UpsertVoteReq>('Create vote requested')
export const createVoteRes = createAction<VoteDetail>('Create vote response received')
export const createVoteErr = createAction<any>('Create vote error received')
