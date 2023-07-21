import React from 'react';
import { Button } from 'react-bootstrap';

export default function EmployeeForm() {
  return (
    <form className="container">
      <div className="row">
        <div className="col">
          <label htmlFor="firstName" className="form-label">
            First Name
            <input type="text" id="firstName" name="firstName" className="form-control" />
          </label>
        </div>
        <div className="col">
          <label htmlFor="lastName" className="form-label">
            Last Name
            <input type="text" id="lastName" name="lastName" className="form-control" />
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="birthDate" className="form-label">
            Date of Birth
            <input type="date" id="birthDate" name="birthDate" className="form-control" />
          </label>

        </div>
        <div className="col">
          <label htmlFor="startDate" className="form-label">
            Start Date
            <input type="date" id="startDate" name="startDate" className="form-control" />
          </label>
        </div>
      </div>
      <fieldset className="container border rounded">
        <legend>Address</legend>
        <div className="row">
          <div className="col">
            <label htmlFor="street" className="form-label">
              Street
              <input type="text" id="street" name="street" className="form-control" />
            </label>

          </div>
          <div className="col">
            <label htmlFor="city" className="form-label">
              City
              <input type="text" id="city" name="city" className="form-control" />
            </label>

          </div>
        </div>

        <div>
          <label htmlFor="state" className="form-label">
            State
            <input type="text" id="state" name="state" className="form-control" />
          </label>

        </div>
        <div>
          <label htmlFor="zipCode" className="form-label">
            Zip Code
            <input type="text" id="zipCode" name="zipCode" className="form-control" />
          </label>

        </div>
      </fieldset>
      <div>
        <label htmlFor="Departement" className="form-label">
          Department
          <input type="text" id="Departement" name="Departement" className="form-control" />
        </label>

      </div>
      <div className="row justify-content-center">
        <div className="col-2">
          <Button type="submit" className="btn-primary btn-lg">Save</Button>
        </div>
      </div>
    </form>
  );
}
