/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal } from 'ro_oc_14_plugin_modal';
import selectEmployee from '../utils/selectors';
import { addEmployeeAction } from '../features/employee';
import departments from '../assets/datas/departments';
import states from '../assets/datas/states';

/**
 * EmployeeForm component (form)
 * @description This component is a form to add an employee
 * @returns {JSX.Element}
 */
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
  const nameRegex = /^[a-zA-Zà-üÀ-Ü]+$/;
  const dateRegex = /^(0?[1-9]|1[0-2])[/](0?[1-9]|[12]\d|3[01])[/](19|20)\d{2}$/;
  const streetRegex = /^[a-zA-Zà-üÀ-Ü0-9\s,'-]*$/;

  /**
   * Open modal
   * @description This function open the modal
   * @returns {void}
   */
  function openModal() {
    setIsModalOpen(true);
  }

  /**
   * Close modal
   * @description This function close the modal
   * @returns {void}
   */
  function closeModal() {
    setIsModalOpen(false);
  }

  /**
   * Toggle input validity
   * @description This function toggle input validity style from validity value
   * @param {object} input - Input element
   * @param {boolean} validity - Validity value
   */
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

  /**
   * Is valid name input
   * @description This function check if name input value is valid
   * @param {object} e - Event object
   * @returns {boolean} - Validity value
   */
  function isValidNameInput(e) {
    const input = e.target;
    if (nameRegex.test(input.value) === false || input.value === '') {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  /**
   * Is valid number input
   * @description This function check if number input value is valid
   * @param {object} e - Event object
   * @returns {boolean} - Validity value
   */
  function isValidNumberInput(e) {
    const input = e.target;
    if (numberRegex.test(input.value) === false || input.value === '') {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  /**
   * Is valid street input
   * @description This function check if street input value is valid
   * @param {object} e - Event object
   * @returns {boolean} - Validity value
   */
  function isValidStreetInput(e) {
    const input = e.target;
    if (streetRegex.test(input.value) === false || input.value === '') {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  /**
   * Is valid state input
   * @description This function check if state input value is valid
   * @returns {boolean} - Validity value
   */
  function isValidStateInput() {
    const input = document.getElementById('state');
    if (states.find((state) => state.value === input.value) === undefined) {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  /**
   * Is valid department input
   * @description This function check if department input value is valid
   * @returns {boolean} - Validity value
   */
  function isValidDepartmentInput() {
    const input = document.getElementById('department');
    if (departments.find((department) => department.value === input.value) === undefined) {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  /**
   * Is valid date input
   * @description This function check if date input value is valid
   * @param {object} e - Event object
   * @returns {boolean} - Validity value
   */
  function isValidStartDateInput(e) {
    const input = e.target;
    if (dateRegex.test(input.value) === false || input.value === '') {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  /**
   * Handle date change
   * @description This function handle date change
   * @param {object} date - Date object
   * @param {string} inputName - Input name
   * @returns {boolean} - Validity value
   */
  function handleStartDateChange(date) {
    const input = document.getElementById(startDateInputName);
    setStartDate(date);
    if (dateRegex.test(date) === false || input.value === '') {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  /**
   * Is valid birth date input
   * @description This function check if birth date input value is valid
   * @param {object} e - Event object
   * @returns {boolean} - Validity value
   */
  function isValidBirthDateInput(e) {
    const input = e.target;
    if (dateRegex.test(input.value) === false || input.value === '') {
      toggleInputValidity(input, false);
      return false;
    }
    const curentYear = new Date().getFullYear();
    const year = birthDate.getFullYear();
    if (curentYear - year < 18) {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  /**
   * Handle birth date change
   * @description This function handle birth date change
   * @param {object} date - Date object
   * @returns {boolean} - Validity value
   */
  function handleBirthDateChange(date) {
    const input = document.getElementById(birthDateInputName);
    setBirthDate(date);
    const curentYear = new Date().getFullYear();
    const year = date.getFullYear();
    if (curentYear - year < 18) {
      toggleInputValidity(input, false);
      return false;
    }
    toggleInputValidity(input, true);
    return true;
  }

  /**
   * Is valid form
   * @description This function check if form is valid
   * @param {object} formInputs - Form inputs
   * @returns {boolean} - Validity value
   */
  function isValidForm(formInputs) {
    let isValid = true;

    if (!isValidNameInput({ target: formInputs.firstName })) {
      isValid = false;
    }
    if (!isValidNameInput({ target: formInputs.lastName })) {
      isValid = false;
    }
    if (!isValidBirthDateInput({ target: formInputs.birthDate })) {
      isValid = false;
    }
    if (!isValidStartDateInput({ target: formInputs.startDate })) {
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

  /**
   * Clear form
   * @description This function clear form
   * @returns {void}
   */
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
    document.querySelectorAll('.is-valid').forEach((element) => {
      element.classList.remove('is-valid');
    });
  }

  /**
   * Handle submit
   * @description This function handle submit
   * @param {object} e - Event object
   * @returns {void}
   */
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
              <div className="invalid-feedback">
                Your first name is invalid, it must contain only letters.
              </div>
            </Form.Label>
          </div>
          <div className="col">
            <Form.Label htmlFor="lastName">
              Last Name
              <Form.Control type="text" id="lastName" name="lastName" required onChange={isValidNameInput} />
              <div className="invalid-feedback">
                Your last name is invalid, it must contain only letters.
              </div>
            </Form.Label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <Form.Label htmlFor={birthDateInputName}>
              Date of Birth
              <div>
                <DatePicker className="form-control" id={birthDateInputName} isClearable selected={birthDate} onChange={(date) => handleBirthDateChange(date)} required />
              </div>
              <div className="invalid-feedback">
                You must be at least 18 years old. You must enter a valid date.
              </div>
            </Form.Label>

          </div>
          <div className="col">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <Form.Label htmlFor={startDateInputName}>
              Start Date
              <div>
                <DatePicker className="form-control" id={startDateInputName} isClearable selected={startDate} onChange={(date) => handleStartDateChange(date)} required />
              </div>
              <div className="invalid-feedback">
                You must enter a valid date.
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
                <div className="invalid-feedback">
                  Your street is invalid, it must contain only letters,
                  numbers, spaces
                </div>
              </Form.Label>

            </div>
            <div className="col">
              <Form.Label htmlFor="city">
                City
                <Form.Control type="text" id="city" name="city" required onChange={isValidNameInput} />
                <div className="invalid-feedback">
                  Your city is invalid, it must contain only letters.
                </div>
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
                <div className="invalid-feedback">
                  You must select a state.
                </div>
              </Form.Label>

            </div>
            <div className="col">
              <Form.Label htmlFor="zipCode">
                Zip Code
                <Form.Control type="number" id="zipCode" name="zipCode" min="0" required onChange={isValidNumberInput} />
                <div className="invalid-feedback">
                  Your zip code is invalid, it must contain only numbers.
                </div>
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
            <div className="invalid-feedback">
              You must select a department.
            </div>
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
      <Modal title="Success" isModalOpen={isModalOpen} onClickClose={closeModal}>
        <p>Employee Created!</p>
      </Modal>
    </>
  );
}
