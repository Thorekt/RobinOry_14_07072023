import employeeReducer from '../features/employee';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
