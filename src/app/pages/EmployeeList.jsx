import React from 'react';
import EmployeeTable from '../components/EmployeeTable';

export default function EmployeeList() {
  return (
    <>
      <div className="row">
        <h1>Current Employees</h1>
      </div>
      <div className="row">
        <EmployeeTable />
      </div>
    </>
  );
}
