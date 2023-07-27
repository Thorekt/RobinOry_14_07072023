import React from 'react';
import Table from 'react-bootstrap/Table';
import EmployeeTableRow from './EmployeeTableRow';

const employees = [
  {
    id: 0,
    firstName: 'John',
    lastName: 'Doe',
    startDate: '2020-01-01',
    department: 'Engineering',
    birthDate: '1990-01-01',
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
  },
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
    startDate: '2020-01-01',
    department: 'Engineering',
    birthDate: '1990-01-01',
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
  },
];

export default function EmployeeTable() {
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
