import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmployeeTableRow component (table row)
 * @description Renders a row in the employee table
 * @param {object} employee - Employee object
 * @returns {JSX.Element}
 */
export default function EmployeeTableRow({ employee }) {
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.startDate}</td>
      <td>{employee.department}</td>
      <td>{employee.birthDate}</td>
      <td>{employee.street}</td>
      <td>{employee.city}</td>
      <td>{employee.state}</td>
      <td>{employee.zipCode}</td>
    </tr>
  );
}

EmployeeTableRow.propTypes = {

  employee: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
  }),
};

EmployeeTableRow.defaultProps = {
  employee: {
    firstName: 'N/A',
    lastName: 'N/A',
    startDate: 'N/A',
    department: 'N/A',
    birthDate: 'N/A',
    street: 'N/A',
    city: 'N/A',
    state: 'N/A',
    zipCode: 'N/A',
  },
};

PropTypes.checkPropTypes(EmployeeTableRow.propTypes, { employee: {} }, 'prop', 'EmployeeTableRow');
