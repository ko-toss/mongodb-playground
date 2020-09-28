import { createReducer } from '@reduxjs/toolkit';
import { someEpicAction } from 'store/actions/someActions';

const INIT_EPIC_REDUCER = { value: 1000 } as const

export const someEpicReducer = createReducer(INIT_EPIC_REDUCER, builder => {
  builder.addCase(someEpicAction, (state, action) => {
    state.value += action.payload
  })
})
