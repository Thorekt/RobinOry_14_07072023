import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employee';

/**
 * @description Store for the application
 */
const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
