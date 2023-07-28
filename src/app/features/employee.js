import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'employee',
  initialState: {
    list: [],
  },
  reducers: {
    addEmployee: {
      prepare: (employee) => ({
        payload: {
          ...employee,
        },
      }),
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
    },
  },
});

const { addEmployee } = actions;

export function addEmployeeAction(employee) {
  return (dispatch) => {
    dispatch(addEmployee(employee));
  };
}

export default reducer;
