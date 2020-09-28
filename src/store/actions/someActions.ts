import { createAction } from '@reduxjs/toolkit';

export const someAction = createAction<number>('Some action happened');

export const someEpicAction = createAction<number>('Some epic action');
