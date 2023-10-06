import { configureStore } from '@reduxjs/toolkit';
import { CreationTest } from './Slices/CreationTest/CreationTest';
import { Test } from './Slices/Test/Test';

export const store = configureStore({
  reducer: {
    CreationTest: CreationTest.reducer,
    Test: Test.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
