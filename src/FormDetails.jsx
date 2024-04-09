import { useState } from "react";

const FillDetailsForm = ({ onFormSubmit }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredDob, setEnteredDob] = useState("");

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setEnteredPhone(e.target.value);
  };

  const dobChangeHandler = (e) => {
    setEnteredDob(e.target.value);
  };

  const validateData = (e) => {
    e.preventDefault();

    // validation for phone number
    if (enteredPhone?.length < 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (new Date(enteredDob).getTime() > new Date().getTime()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }
    onFormSubmit(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={validateData}>
          <label>Username:</label>
          <br />
          <input
            type="text"
            onChange={usernameChangeHandler}
            id="username"
            value={enteredUsername}
            required
          ></input>
          <br />

          <label>Email Address:</label>
          <br />
          <input
            type="email"
            onChange={emailChangeHandler}
            id="email"
            value={enteredEmail}
            required
          ></input>
          <br />

          <label>Phone Number:</label>
          <br />
          <input
            type="tel"
            onChange={phoneChangeHandler}
            id="phone"
            value={enteredPhone}
            required
          ></input>
          <br />

          <label>Date of Birth</label>
          <br />
          <input
            type="date"
            onChange={dobChangeHandler}
            id="dob"
            value={enteredDob}
            required
          ></input>
          <br />

          <button className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FillDetailsForm;
