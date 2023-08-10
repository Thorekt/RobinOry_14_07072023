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
  // const [isFormValid, setIsFormValid] = useState(false);

  const birthDateInputName = 'birthDate';
  const startDateInputName = 'startDate';

  const numberRegex = /^[0-9]+$/;
  const nameRegex = /^[a-zA-Z]+$/;
  const dateRegex = /^(0?[1-9]|1[0-2])[/](0?[1-9]|[12]\d|3[01])[/](19|20)\d{2}$/;
  const streetRegex = /^[a-zA-Z0-9\s,'-]*$/;

  function toggleInputValidity(input, validity) {
    if (validity === true) {
      if (input.classList.contains('is-invalid')) {
        input.classList.remove('is-invalid');
      }
      if (!input.classList.contains('is-valid')) {
        input.classList.add('is-valid');
      }
    }
    if (validity === false) {
      if (input.classList.contains('is-valid')) {
        input.classList.remove('is-valid');
      }
      if (!input.classList.contains('is-invalid')) {
        input.classList.add('is-invalid');
      }
    }
  }

  function isValidNameInput(e) {
    const input = e.target;
    if (nameRegex.test(input.value) === false || input.value === '') {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  function isValidNumberInput(e) {
    const input = e.target;
    if (numberRegex.test(input.value) === false || input.value === '') {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  function isValidStreetInput(e) {
    const input = e.target;
    if (streetRegex.test(input.value) === false || input.value === '') {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  function isValidStateInput() {
    const input = document.getElementById('state');
    if (states.find((state) => state.value === input.value) === undefined) {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  function isValidDepartmentInput() {
    const input = document.getElementById('department');
    if (departments.find((department) => department.value === input.value) === undefined) {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  function isValidDateInput(e) {
    const input = e.target;
    if (dateRegex.test(input.value) === false || input.value === '') {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  function handleDateChange(date, inputName) {
    const input = document.getElementById(inputName);
    if (inputName === birthDateInputName) {
      setBirthDate(date);
    } else {
      setStartDate(date);
    }
    if (dateRegex.test(date) === false || input.value === '') {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  function isValidForm(formInputs) {
    let isValid = true;

    if (!isValidNameInput({ target: formInputs.firstName })) {
      isValid = false;
    }
    if (!isValidNameInput({ target: formInputs.lastName })) {
      isValid = false;
    }
    if (!isValidDateInput({ target: formInputs.birthDate })) {
      isValid = false;
    }
    if (!isValidDateInput({ target: formInputs.startDate })) {
      isValid = false;
    }
    if (!isValidStreetInput({ target: formInputs.street })) {
      isValid = false;
    }
    if (!isValidNameInput({ target: formInputs.city })) {
      isValid = false;
    }
    if (!isValidStateInput()) {
      isValid = false;
    }
    if (!isValidNumberInput({ target: formInputs.zipCode })) {
      isValid = false;
    }
    if (!isValidDepartmentInput()) {
      isValid = false;
    }

    return isValid;
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
    const formInputs = e.target.elements;
    if (!isValidForm(formInputs)) {
      alert('Please fill out all fields');
      return;
    }
    const employee = {
      id: list.length,
      firstName: formInputs.firstName.value,
      lastName: formInputs.lastName.value,
      birthDate: formInputs.birthDate.value,
      startDate: formInputs.startDate.value,
      street: formInputs.street.value,
      city: formInputs.city.value,
      state: formInputs.state.value,
      zipCode: formInputs.zipCode.value,
      department: formInputs.department.value,
    };
    dispatch(addEmployeeAction(employee));
    clearForm();
  }

  return (
    <form className="container needs-validation" onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="col">
          <label htmlFor="firstName" className="form-label">
            First Name
            <input type="text" id="firstName" name="firstName" className="form-control" required onChange={isValidNameInput} />
          </label>
        </div>
        <div className="col">
          <label htmlFor="lastName" className="form-label">
            Last Name
            <input type="text" id="lastName" name="lastName" className="form-control" required onChange={isValidNameInput} />
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor={birthDateInputName} className="form-label">
            Date of Birth
            <div>
              <DatePicker className="form-control" id={birthDateInputName} isClearable selected={birthDate} onChange={(date) => handleDateChange(date, birthDateInputName)} required />
            </div>
          </label>

        </div>
        <div className="col">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor={startDateInputName} className="form-label">
            Start Date
            <div>
              <DatePicker className="form-control" id={startDateInputName} isClearable selected={startDate} onChange={(date) => handleDateChange(date, startDateInputName)} required />
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
              <input type="text" id="street" name="street" className="form-control" required onChange={isValidStreetInput} />
            </label>

          </div>
          <div className="col">
            <label htmlFor="city" className="form-label">
              City
              <input type="text" id="city" name="city" className="form-control" required onChange={isValidNameInput} />
            </label>

          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="state" className="form-label">
              State
              {/* eslint-disable-next-line react/jsx-no-bind */}
              <Select options={states} id="state" name="state" required onChange={isValidStateInput} />
            </label>

          </div>
          <div className="col">
            <label htmlFor="zipCode" className="form-label">
              Zip Code
              <input type="number" id="zipCode" name="zipCode" className="form-control" min="0" required onChange={isValidNumberInput} />
            </label>

          </div>
        </div>
      </fieldset>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="department" className="form-label">
          Department
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <Select options={departments} id="department" name="department" required onChange={isValidDepartmentInput} />
        </label>

      </div>
      <div className="row justify-content-center">
        <div className="col-2 row justify-content-center">
          <Button type="submit" className="btn-lg">Save</Button>
        </div>
      </div>
    </form>
  );
}
