import React from 'react';

const style = {
  inputForms: {
    marginTop: "15px",
  },
  formContainer:
  {
    width: "50%",
    textAlign: "left"
  },
  buttonColor: {
    background: "#393053"
  },
  div: {
    marginTop: "100px"
  }
}

export default function Contact() {

  const validateText = (value) => value === "" ? false : true;
  // eslint-disable-next-line
  const validateEmail = (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? true : false;
  const blockStyle = (element) => element.style = "display: block";
  const noStyle = (element) => element.style = "display: none";

  const validateFormName = function () {
    const inputArray = document.querySelectorAll(".form-control");
    const errorElement = document.querySelectorAll(".error-message")[0];
    // eslint-disable-next-line
    const name = validateText(inputArray[0].value) === true ? noStyle(errorElement) : blockStyle(errorElement);
  };

  const validateFormEmail = function () {
    const inputArray = document.querySelectorAll(".form-control");
    const errorElement = document.querySelectorAll(".error-message")[1];
    // eslint-disable-next-line
    const email = validateEmail(inputArray[1].value) === true ? noStyle(errorElement) : blockStyle(errorElement);
  };

  const validateFormMessage = function () {
    const inputArray = document.querySelectorAll(".form-control");
    const errorElement = document.querySelectorAll(".error-message")[2];
    // eslint-disable-next-line
    const message = validateText(inputArray[2].value) === true ? noStyle(errorElement) : blockStyle(errorElement);
  };

  const resetForm = function () {
    const inputArray = document.querySelectorAll(".form-control");
    const errorArray = document.querySelectorAll(".error-message");
    // eslint-disable-next-line
    const resetDisplay = errorArray.forEach((element) => element.style = "display: none;");
    const blockStyle = (element) => element.style = "display: block";
    const name = validateText(inputArray[0].value) === true ? false : blockStyle(errorArray[0]);
    const email = validateEmail(inputArray[1].value) === true ? false : blockStyle(errorArray[1]);
    const message = validateText(inputArray[2].value) === true ? false : blockStyle(errorArray[2]);

    if (!name && !email && !message) {
      document.querySelector('.form-container').reset();
    }
  };

  return (
    <div style={style.div}>
      <center><form style={style.formContainer} className="form-container">
        <div className="form-group" style={style.inputForms}>
          <label>Name:</label>
          <input type="text" onBlur={validateFormName} className="form-control" id="fullName" placeholder="First and Last Name"></input>
          <small style={{ display: "none" }} className="error-message"><i>**Make sure to add your name!</i></small>
        </div>
        <div className="form-group" style={style.inputForms}>
          <label>Email address:</label>
          <input type="email" onBlur={validateFormEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small style={{ display: "none" }} className="error-message"><i>**Please enter a valid email</i></small>
        </div>
        <div className="form-group" style={style.inputForms}>
          <label>Message:</label>
          <textarea className="form-control" onBlur={validateFormMessage} id="exampleFormControlTextarea1" rows="5" placeholder="Write your message here..."></textarea>
          <small style={{ display: "none" }} className="error-message"><i>**Add your message before you submit!</i></small>
        </div>
        <button type="submit" onClick={resetForm} className="btn btn-primary" style={{ ...style.inputForms, ...style.buttonColor }}>Submit</button>
      </form></center>
    </div>
  );
}
