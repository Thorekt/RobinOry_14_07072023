import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import selectEmployee from '../utils/selectors';
import { addEmployeeAction } from '../features/employee';

export default function EmployeeForm() {
  const dispatch = useDispatch();
  const { list } = useSelector(selectEmployee);

  function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('birthDate').value = '';
    document.getElementById('startDate').value = '';
    document.getElementById('street').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('departement').value = '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    const employee = {
      id: list.length,
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      birthDate: e.target.elements.birthDate.value,
      startDate: e.target.elements.startDate.value,
      street: e.target.elements.street.value,
      city: e.target.elements.city.value,
      state: e.target.elements.state.value,
      zipCode: e.target.elements.zipCode.value,
      departement: e.target.elements.departement.value,
    };
    dispatch(addEmployeeAction(employee));
    clearForm();
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
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
        <div className="row">
          <div className="col">
            <label htmlFor="state" className="form-label">
              State
              <input type="text" id="state" name="state" className="form-control" />
            </label>

          </div>
          <div className="col">
            <label htmlFor="zipCode" className="form-label">
              Zip Code
              <input type="text" id="zipCode" name="zipCode" className="form-control" />
            </label>

          </div>
        </div>
      </fieldset>
      <div>
        <label htmlFor="departement" className="form-label">
          Department
          <input type="text" id="departement" name="departement" className="form-control" />
        </label>

      </div>
      <div className="row justify-content-center">
        <div className="col-2">
          <Button type="submit" className="btn-lg">Save</Button>
        </div>
      </div>
    </form>
  );
}
