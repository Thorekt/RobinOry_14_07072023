import React from 'react';
import EmployeeForm from '../components/EmployeeForm';

export default function CreateEmployee() {
  return (
    <>
      <div className="row">
        <h1>Create Employee</h1>
      </div>
      <div className="row">
        <EmployeeForm />
      </div>
    </>
  );
}
