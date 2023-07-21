import React from 'react';

export default function EmployeeForm() {
  return (
    <form>
      <div>
        <label htmlFor="firstName">
          First Name
          <input type="text" id="firstName" name="firstName" />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          Last Name
          <input type="text" id="lastName" name="lastName" />
        </label>

      </div>
      <div>
        <label htmlFor="birthDate">
          Date of Birth
          <input type="date" id="birthDate" name="birthDate" />
        </label>

      </div>
      <div>
        <label htmlFor="startDate">
          Start Date
          <input type="date" id="startDate" name="startDate" />
        </label>

      </div>
      <fieldset>
        <legend>Address</legend>
        <div>
          <label htmlFor="street">
            Street
            <input type="text" id="street" name="street" />
          </label>

        </div>
        <div>
          <label htmlFor="city">
            City
            <input type="text" id="city" name="city" />
          </label>

        </div>
        <div>
          <label htmlFor="state">
            State
            <input type="text" id="state" name="state" />
          </label>

        </div>
        <div>
          <label htmlFor="zipCode">
            Zip Code
            <input type="text" id="zipCode" name="zipCode" />
          </label>

        </div>
      </fieldset>
      <div>
        <label htmlFor="Departement">
          Department
          <input type="text" id="Departement" name="Departement" />
        </label>

      </div>
      <button type="submit">Save</button>
    </form>
  );
}
