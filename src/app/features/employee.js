import { createSlice } from '@reduxjs/toolkit';

/**
 * @description Employee slice
 */
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

/**
 * Add employee action
 * @description Add employee action
 * @param {Object} employee
 * @returns {Function}
 * @example dispatch(addEmployeeAction(employee));
 */
export function addEmployeeAction(employee) {
  return (dispatch) => {
    dispatch(addEmployee(employee));
  };
}

export default reducer;
