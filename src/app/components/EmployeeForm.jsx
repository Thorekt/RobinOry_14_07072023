/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import selectEmployee from '../utils/selectors';
import { addEmployeeAction } from '../features/employee';
import departments from '../assets/datas/departments';
import states from '../assets/datas/states';
import Modal from './Modal';

export default function EmployeeForm() {
  const dispatch = useDispatch();
  const { list } = useSelector(selectEmployee);

  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [isFormValid, setIsFormValid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const birthDateInputName = 'birthDate';
  const startDateInputName = 'startDate';

  const numberRegex = /^[0-9]+$/;
  const nameRegex = /^[a-zA-Z]+$/;
  const dateRegex = /^(0?[1-9]|1[0-2])[/](0?[1-9]|[12]\d|3[01])[/](19|20)\d{2}$/;
  const streetRegex = /^[a-zA-Z0-9\s,'-]*$/;

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

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
    setIsFormValid(isValid);
    return isValid;
  }

  function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('birthDate').value = '';
    setBirthDate(null);
    document.getElementById('startDate').value = '';
    setStartDate(null);
    document.getElementById('street').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('department').value = '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formInputs = e.target.elements;

    if (!isValidForm(formInputs) || !e.currentTarget.checkValidity()) {
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
    openModal();
  }

  return (
    <>
      <Form className="container needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="col">
            <Form.Label htmlFor="firstName">
              First Name
              <Form.Control type="text" id="firstName" name="firstName" required onChange={isValidNameInput} />
            </Form.Label>
          </div>
          <div className="col">
            <Form.Label htmlFor="lastName">
              Last Name
              <Form.Control type="text" id="lastName" name="lastName" required onChange={isValidNameInput} />
            </Form.Label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <Form.Label htmlFor={birthDateInputName}>
              Date of Birth
              <div>
                <DatePicker className="form-control" id={birthDateInputName} isClearable selected={birthDate} onChange={(date) => handleDateChange(date, birthDateInputName)} required />
              </div>
            </Form.Label>

          </div>
          <div className="col">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <Form.Label htmlFor={startDateInputName}>
              Start Date
              <div>
                <DatePicker className="form-control" id={startDateInputName} isClearable selected={startDate} onChange={(date) => handleDateChange(date, startDateInputName)} required />
              </div>
            </Form.Label>
          </div>
        </div>
        <fieldset className="container border rounded">
          <legend>Address</legend>
          <div className="row">
            <div className="col">
              <Form.Label htmlFor="street">
                Street
                <Form.Control type="text" id="street" name="street" required onChange={isValidStreetInput} />
              </Form.Label>

            </div>
            <div className="col">
              <Form.Label htmlFor="city">
                City
                <Form.Control type="text" id="city" name="city" required onChange={isValidNameInput} />
              </Form.Label>

            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <Form.Label htmlFor="state">
                State
                <Form.Select id="state" name="state" aria-label="Default select example" required onChange={isValidStateInput}>
                  {states.map((state) => (
                    <option key={state.value} value={state.value}>{state.label}</option>
                  ))}
                </Form.Select>
              </Form.Label>

            </div>
            <div className="col">
              <Form.Label htmlFor="zipCode">
                Zip Code
                <Form.Control type="number" id="zipCode" name="zipCode" min="0" required onChange={isValidNumberInput} />
              </Form.Label>

            </div>
          </div>
        </fieldset>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <Form.Label htmlFor="department">
            Department
            <Form.Select id="department" name="department" aria-label="Default select example" required onChange={isValidDepartmentInput}>
              {departments.map((department) => (
                <option key={department.value} value={department.value}>{department.label}</option>
              ))}
            </Form.Select>
          </Form.Label>

        </div>
        <Alert variant="danger text-center my-4" show={!isFormValid}>
          Please fill out all fields
        </Alert>
        <div className="row justify-content-center my-4 ">
          <div className="col-2 row justify-content-center">
            <Button type="submit" className="btn-lg">Save</Button>
          </div>
        </div>
      </Form>
      <Modal title="test" isModalOpen={isModalOpen} onClickClose={closeModal} />
    </>
  );
}
