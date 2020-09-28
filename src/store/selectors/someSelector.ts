import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';

export const selectSomeFeature = (state: RootState) => state.someFeatureReducer

export const selectSomeFeatureReducerValue = createSelector(selectSomeFeature, someFeature => someFeature.someReducer.value)

export const selectSomeFeatureEpicReducerValue = createSelector(selectSomeFeature, someFeature => someFeature.someEpicReducer.value)
