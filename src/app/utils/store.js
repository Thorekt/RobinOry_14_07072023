import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employee';

export  default const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
