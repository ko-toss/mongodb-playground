import { createAction } from '@reduxjs/toolkit';

export const someAction = createAction<number>('Some action happened');
