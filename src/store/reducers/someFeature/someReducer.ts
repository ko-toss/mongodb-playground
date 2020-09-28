import { createReducer } from '@reduxjs/toolkit';
import { someAction } from 'store/actions/someActions';

const INITIAL_SOME_REDUCER_STATE = { value: 0 } as const

export const someReducer = createReducer(INITIAL_SOME_REDUCER_STATE, builder => {
  builder
    .addCase(someAction, (state, action) => {
      state.value += action.payload;
    })
})
