import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import selectEmployee from '../utils/selectors';
import { addEmployeeAction } from '../features/employee';
import departments from '../assets/datas/departments';
import states from '../assets/datas/states';

export default function EmployeeForm() {
  const dispatch = useDispatch();
  const { list } = useSelector(selectEmployee);

  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  function isValidEmployee(employee) {
    if (employee.firstName === '') {
      return false;
    }
    if (employee.lastName === '') {
      return false;
    }
    if (employee.birthDate === '') {
      return false;
    }
    if (employee.startDate === '') {
      return false;
    }
    if (employee.street === '') {
      return false;
    }
    if (employee.city === '') {
      return false;
    }
    if (employee.state === '') {
      return false;
    }
    if (employee.zipCode === '') {
      return false;
    }
    if (employee.departement === '') {
      return false;
    }
    return true;
  }

  function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('birthDate').value = '';
    document.getElementById('startDate').value = '';
    document.getElementById('street').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('department').value = '';
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
      department: e.target.elements.department.value,
    };
    if (isValidEmployee(employee) === true) {
      dispatch(addEmployeeAction(employee));
      clearForm();
    } else {
      alert('Please fill out all fields');
    }
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
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="birthDate" className="form-label">
            Date of Birth
            <div>
              <DatePicker className="form-control" id="birthDate" isClearable selected={birthDate} onChange={(date) => setBirthDate(date)} />
            </div>
          </label>

        </div>
        <div className="col">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="startDate" className="form-label">
            Start Date
            <div>
              <DatePicker className="form-control" id="startDate" isClearable selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
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
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="state" className="form-label">
              State
              <Select options={states} id="state" name="state" />
            </label>

          </div>
          <div className="col">
            <label htmlFor="zipCode" className="form-label">
              Zip Code
              <input type="number" id="zipCode" name="zipCode" className="form-control" min="0" />
            </label>

          </div>
        </div>
      </fieldset>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="department" className="form-label">
          Department
          <Select options={departments} id="department" name="department" />
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
