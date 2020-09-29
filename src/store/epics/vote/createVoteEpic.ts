import { Epic } from 'redux-observable';
import { RootState } from 'store/reducers';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { createVoteErr, createVoteReq, createVoteRes } from 'store/actions/vote';
import { AnyAction } from 'redux';
import { postCreateVote } from 'remotes/postCreateVote';
import { of } from 'rxjs';

export const createVoteEpic: Epic<AnyAction, AnyAction, RootState> = action$ => {
  const createVoteReqPayload$ = action$.pipe(filter(createVoteReq.match), map(action => action.payload));
  return createVoteReqPayload$.pipe(
    switchMap(data => {
      return postCreateVote(data).pipe(
        map(res => createVoteRes(res)),
        catchError(err => of(createVoteErr(err)))
      )
    })
  )
}

