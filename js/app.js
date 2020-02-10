function validate() {
  // set variables
  let forename = document.getElementById("forename").value;
  let surname = document.getElementById("surname").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let error_message = document.getElementById("error_message");
  let text;
  error_message.style.padding = "10px";

  if (forename.length < 2) {
    text = "Please Enter valid Forename";
    error_message.innerHTML = text;
    return false;
  }
  if (surname.length < 2) {
    text = "Please Enter valid Surname";
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if (isNaN(number) || number.length != 10) {
    text = "Please Enter valid NHS Number";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
