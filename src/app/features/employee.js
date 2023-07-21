import { createSlice } from '@reduxjs/toolkit';
import selectEmployee from '../utils/selectors';

const { reducer, actions } = createSlice({
  name: 'employee',
  initialState: {
  },
  reducers: {
  },
});

actions.selectEmployee = selectEmployee;
export default reducer;
