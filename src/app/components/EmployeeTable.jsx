import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import selectEmployee from '../utils/selectors';
import EmployeeTableRow from './EmployeeTableRow';

/**
 * EmployeeTable component (table)
 * @description Renders the employee table
 * @returns {JSX.Element}
 */
export default function EmployeeTable() {
  const { list } = useSelector(selectEmployee);
  const employees = list;

  return (
    <Table>
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Start Date</th>
          <th scope="col">Department</th>
          <th scope="col">Date of Birth</th>
          <th scope="col">Street</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
          <th scope="col">Zip Code</th>
        </tr>
      </thead>
      <tbody>
        {
      employees.map((employee) => (
        <EmployeeTableRow key={employee.id} employee={employee} />
      ))
      }
      </tbody>
    </Table>
  );
}
