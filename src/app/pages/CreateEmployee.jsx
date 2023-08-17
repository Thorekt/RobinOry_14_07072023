import React from 'react';
import EmployeeForm from '../components/EmployeeForm';

/**
 * CreateEmployee component (page)
 * @description Renders the create employee page
 * @returns {JSX.Element}
 */
export default function CreateEmployee() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1>Create Employee</h1>
      </div>
      <div className="row">
        <EmployeeForm />
      </div>
    </>
  );
}
