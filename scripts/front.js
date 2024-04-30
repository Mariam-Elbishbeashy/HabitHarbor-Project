
//login validate
function validateForm() {
  var email = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if email is empty or not valid
  if (email === '' || !emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // Check if password is empty or too short
  if (password === '' || password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return false;
  }

  // Form is valid, allow submission
  return true;
}


//signup validate

function validateForm1() {
  var firstName = document.getElementById('fname').value.trim();
  var lastName = document.getElementById('lname').value.trim();
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value;
  var phoneNumber = document.getElementById('number').value.trim();
  var age = document.getElementById('age').value;
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;

  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regular expression for phone number validation
  var phoneRegex = /^(01[0-2])(\d{4})(\d{4})$/;


  // Validation logic
  if (firstName === '') {
    alert('Please enter your first name.');
    return false;
  }

  if (lastName === '') {
    alert('Please enter your last name.');
    return false;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return false;
  }

  if (!phoneRegex.test(phoneNumber)) {
    alert('Please enter a valid phone number (e.g., XXX-XXX-XXXX).');
    return false;
  }

  if (age < 18 || age > 120) {
    alert('Please enter a valid age between 18 and 120.');
    return false;
  }

  if (weight <= 0) {
    alert('Please enter a valid weight (greater than 0).');
    return false;
  }

  if (height <= 0) {
    alert('Please enter a valid height (greater than 0).');
    return false;
  }

  // Form is valid, allow submission
  return true;
}