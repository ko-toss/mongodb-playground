import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';

export const selectSomeFeature = (state: RootState) => state.someFeature
export const selectSomeFeatureValue = createSelector(selectSomeFeature, someFeature => someFeature.value)
