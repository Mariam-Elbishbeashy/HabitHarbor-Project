
//login validate
function validateForm() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;


  var userUsername = "Ali@gmail.com";
  var userPassword = "123456";
  var adminUsername = "Lara@gmail.com";
  var adminPassword = "123456";

  // Check if username and password match the static values for user
  if (username === userUsername && password === userPassword) {
      // Redirect user to user-specific page (replace with actual user page URL)
      window.location.href = "../public/index.html";
      return false;
  }

  // Check if username and password match the static values for admin
  if (username === adminUsername && password === adminPassword) {
      // Redirect admin to admin-specific page (replace with actual admin page URL)
      window.location.href = "../public/admin.html";
    
  }

else
  alert('Invalid username or password.');
  return false;
}




