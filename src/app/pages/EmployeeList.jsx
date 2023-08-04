import React from 'react';
import EmployeeTable from '../components/EmployeeTable';

export default function EmployeeList() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1>Current Employees</h1>
      </div>
      <div className="row">
        <EmployeeTable />
      </div>
    </>
  );
}
