// Sondos
//user.js

window.onload = function() {
  var generalLink = document.getElementById('generalLink');
  generalLink.classList.add('active');
  generalLink.style.fontWeight = 'bold';
  generalLink.style.color = '#CAF746'; 
  toggleFontWeight('generalLink');
  starRating(); 
  
};

//left panel 
function toggleOption(optionName) {
  var generalContent = document.getElementById("generalContent");
  var infoContent = document.getElementById("infoContent");
  var passwordContent = document.getElementById("passwordContent");
  var healthInfoContent = document.getElementById("healthInfoContent");
  var socialLinksContent = document.getElementById("socialLinksContent");
  var feedbackContent = document.getElementById("feedbackContent");

  var generalLink = document.getElementById("generalLink");
  var infoLink = document.getElementById("infoLink");
  var passwordLink = document.getElementById("passwordLink");
  var healthInfoLink = document.getElementById("healthInfoLink");
  var socialLinks = document.getElementById("socialLinksLink");
  var feedbackLink = document.getElementById("feedbackLink");

  generalContent.style.display = "none";
  infoContent.style.display = "none";
  passwordContent.style.display = "none";
  healthInfoContent.style.display = "none";
  socialLinksContent.style.display="none";
  feedbackContent.style.display = "none";

  generalLink.classList.remove("active");
  infoLink.classList.remove("active");
  passwordLink.classList.remove("active");
  healthInfoLink.classList.remove("active");
  socialLinks.classList.remove("active");
  feedbackLink.classList.remove("active");

  if (optionName === "general") {
      generalContent.style.display = "block";
      generalLink.classList.add("active");

  } else if (optionName === "info") {
      infoContent.style.display = "block";
      infoLink.classList.add("active");

    } else if (optionName === "healthInfo") {
      healthInfoContent.style.display = "block";
      healthInfoLink.classList.add("active");
  } 
else if (optionName === "socialLinks") {
  socialLinksContent.style.display = "block";
  socialLinks.classList.add("active");
} 
else if (optionName === "password") {
      passwordContent.style.display = "block";
      passwordLink.classList.add("active");
     
  } else if (optionName === "feedback") {
      feedbackContent.style.display = "block";
      feedbackLink.classList.add("active");
  }
}

function toggleFontWeight(linkId) {
  var links = document.querySelectorAll('.left-panel a'); 
  links.forEach(function(link) {
      if (link.id === linkId) { 
          link.classList.add('active');
          link.style.fontWeight = 'bold';
          link.style.color = '#CAF746'; 
      } else { 
          link.classList.remove('active');
          link.style.fontWeight = 'normal';
          link.style.color = 'white'; 
      }
  });
}

//general section: profile picture
  function changeProfile() {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
  
    fileInput.onchange = function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = function() {
        var profilePic = document.getElementById("profilePic");
        profilePic.src = reader.result;
      };
      reader.readAsDataURL(file);
    };
  
    fileInput.click();
  }
 
  //health info
  function toggleOtherTextArea() {
    var otherCheckbox = document.getElementById("goal5");
    var otherTextArea = document.getElementById("otherGoalTextArea");
    if (otherCheckbox.checked) {
        otherTextArea.style.display = "block";
    } else {
        otherTextArea.style.display = "none";
    }
}

function saveHealthInfoChanges() {
  var checkboxes = document.querySelectorAll('#healthInfoContent input[type="checkbox"]');
  var otherTextArea = document.getElementById("otherGoal");
  var saveChangesButton = document.querySelector('#healthInfoContent button');

  checkboxes.forEach(function(checkbox) {
      checkbox.disabled = true;
  });

  otherTextArea.disabled = true;

  saveChangesButton.style.display = "none";
  saveChangesButton.style.border = "none";

  var instructionLine = document.querySelector('.custom-info');
  instructionLine.style.display = "none";

  checkboxes.forEach(function(checkbox) {
      checkbox.classList.add('disabled-checkbox');
  });

  var healthIssuesTextArea = document.getElementById("health-issues");
  healthIssuesTextArea.disabled = true;

  var modal = document.getElementById("saveChanges-modal");
  modal.style.display = "block";

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
      modal.style.display = "none";
  }

  var closeModalBtn = document.getElementById("closeModalBtn");
  closeModalBtn.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  var editButton = document.getElementById("editHealthInfoButton");
  editButton.style.display = "block";

  disableTextAreaAndCheckboxes(true);
  
}

function editHealthInfo() {
  disableTextAreaAndCheckboxes(false);

  var saveChangesButton = document.querySelector('#healthInfoContent button');
  saveChangesButton.style.display = "block";

  var editButton = document.getElementById("editHealthInfoButton");
  editButton.style.display = "none";

  var checkboxes = document.querySelectorAll('#healthInfoContent input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
      checkbox.classList.remove('disabled-checkbox');
  });
}

//Password
function validatePasswords() {
  var currentPasswordInput = document.getElementById("currentPassword");
  var newPasswordInput = document.getElementById("newPassword");
  var confirmPasswordInput = document.getElementById("confirmPassword");
  var currentPassword = currentPasswordInput.value;
  var newPassword = newPasswordInput.value;
  var confirmPassword = confirmPasswordInput.value;
  var currentPasswordError = document.getElementById("currentPasswordError"); 
  var newPasswordError = document.getElementById("newPasswordError");
  var confirmPasswordError = document.getElementById("confirmPasswordError");

  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  if (currentPassword.trim() === '') {
      currentPasswordError.innerHTML = "Please enter your current password"; 
      return false;
  } else {
      currentPasswordError.innerHTML = ""; 
  }

  if (newPassword !== confirmPassword) {
      confirmPasswordError.innerHTML = "Passwords do not match";
      return false;
  } else {
      confirmPasswordError.innerHTML = "";
  }

  if (newPassword === currentPassword) {
      newPasswordError.innerHTML = "New password cannot be the same as the current password";
      return false;
  } else {
      newPasswordError.innerHTML = "";
  }

  if (!newPassword.match(passwordRegex)) {
      newPasswordError.innerHTML = "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters";
      return false;
  } else {
      newPasswordError.innerHTML = "";
  }

  confirmPasswordError.innerHTML = "";
  newPasswordError.innerHTML = "";

  return true;
}


function changePassword() {
  if (validatePasswords()) {
    var modal = document.getElementById("saveChanges-modal");
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    var closeModalBtn = document.getElementById("closeModalBtn");
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById("currentPassword").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";

    document.getElementById("showCurrentPassword").checked = false;
    document.getElementById("showNewPassword").checked = false;
    document.getElementById("showConfirmPassword").checked = false;
    
  } else {
      console.log("Password validation failed...");
  }
}

function disableTextAreaAndCheckboxes(disabled) {
  var healthIssuesTextArea = document.getElementById("health-issues");
  healthIssuesTextArea.disabled = disabled;

  var checkboxes = document.querySelectorAll('#healthInfoContent input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
      checkbox.disabled = disabled;
  });

  var otherTextArea = document.getElementById("otherGoal");
  otherTextArea.disabled = disabled;
}


//feedback
function starRating() {
  var stars = document.getElementsByClassName("fas");
  var emoji = document.getElementById("emojis");

  for (let i = 0; i < stars.length; i++) {
    stars[i].onclick = function() {
      for (let j = 0; j < stars.length; j++) {
        if (j <= i) {
          stars[j].style.color = "#CAF746";
        } else {
          stars[j].style.color = "#e4e4e4";
        }
      }
      emoji.style.transform = `translateX(-${i * 100}px)`;
    };
  }
}

function displayFeedbackModal() {
    document.getElementById("feedbackModal").style.display = "block";

    document.getElementById("submitBtn").style.display = "none";

    document.getElementById("feedbackSubmitButton").style.display = "block";

    var stars = document.getElementsByClassName("fas");
    for (var i = 0; i < stars.length; i++) {
        stars[i].style.pointerEvents = "none";
    }

    document.getElementById("feedback").disabled = true;
}

function closeFeedbackModal() {
  document.getElementById("feedbackModal").style.display = "none";
}

document.getElementById("submitBtn").addEventListener("click", displayFeedbackModal);
document.getElementById("closeFeedbackModalBtn").addEventListener("click", closeFeedbackModal);

window.addEventListener("click", function(event) {
  var feedbackModal = document.getElementById("feedbackModal");
  if (event.target == feedbackModal) {
      closeFeedbackModal();
  }
});

function changeRatingButton() {
  document.getElementById("feedbackModal").style.display = "none";

  document.getElementById("submitBtn").style.display = "block";

  document.getElementById("feedbackSubmitButton").style.display = "none";

  var stars = document.getElementsByClassName("fas");
  for (var i = 0; i < stars.length; i++) {
      stars[i].style.pointerEvents = "auto";
      stars[i].style.color = "#e4e4e4"; 
  }

  document.getElementById("feedback").value = "";

  document.getElementById("feedback").disabled = false;
}

//edit general info
function editGeneralInfo() {
  var modal = document.getElementById("editModal");
  modal.style.display = "block";

  document.getElementById("editFirstName").value = "";
  document.getElementById("editLastName").value = "";
  document.getElementById("editUsername").value = "";
  document.getElementById("editEmail").value = "";
}

function closeEditModal() {
  var modal = document.getElementById("editModal");
  modal.style.display = "none";
  
  document.getElementById("firstNameError").innerHTML = "";
  document.getElementById("lastNameError").innerHTML = "";
  document.getElementById("usernameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
}

document.getElementById("editButton").addEventListener("click", editGeneralInfo);

document.getElementsByClassName("close")[1].addEventListener("click", closeEditModal);

function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm(form) {
  var firstName = form.elements["editFirstName"].value.trim();
  var lastName = form.elements["editLastName"].value.trim();
  var username = form.elements["editUsername"].value.trim();
  var email = form.elements["editEmail"].value.trim();

  var nameRegex = /^[a-zA-Z]+$/;
  var usernameRegex = /^[a-zA-Z0-9_]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var isValid = true;
  var errorMessage = "";

  if (firstName === "") {
    printError("firstNameError", "Please enter your first name");
    isValid = false;
  } else if (!firstName.match(nameRegex)) {
    printError("firstNameError", "Please enter a valid first name");
    isValid = false;
  } else {
    printError("firstNameError", "");
  }

  if (lastName === "") {
    printError("lastNameError", "Please enter your last name");
    isValid = false;
  } else if (!lastName.match(nameRegex)) {
    printError("lastNameError", "Please enter a valid last name");
    isValid = false;
  } else {
    printError("lastNameError", "");
  }

  if (username === "") {
    printError("usernameError", "Please enter a username");
    isValid = false;
  } else if (!username.match(usernameRegex)) {
    printError("usernameError", "Please enter a valid username");
    isValid = false;
  } else {
    printError("usernameError", "");
  }

  if (email === "") {
    printError("emailError", "Please enter an email address");
    isValid = false;
  } else if (!email.match(emailRegex)) {
    printError("emailError", "Please enter a valid email address");
    isValid = false;
  } else {
    printError("emailError", "");
  }

  if (isValid) {
    saveUserInfo(form);
  }
}

function saveUserInfo(form) {
  var firstName = form.elements["editFirstName"].value.trim();
  var lastName = form.elements["editLastName"].value.trim();
  var username = form.elements["editUsername"].value.trim();
  var email = form.elements["editEmail"].value.trim();

  document.getElementById("firstName").value = firstName;
  document.getElementById("lastName").value = lastName;
  document.getElementById("username").value = username;
  document.getElementById("email").value = email;

  closeEditModal();
}

//social links
function saveSocialLinksChanges() {
  var facebookLink = document.getElementById("facebookLink").value;
  var twitterLink = document.getElementById("twitterLink").value;
  var instagramLink = document.getElementById("instagramLink").value;
  var linkedinLink = document.getElementById("linkedinLink").value;

  // Regular expressions for validating URLs
  var urlRegex = /^(?:(ftp|http|https):\/\/)?[^ "]+$/;

  var errorMessages = {
      facebookLinkError: "Please enter a valid Facebook link",
      twitterLinkError: "Please enter a valid Twitter link",
      instagramLinkError: "Please enter a valid Instagram link",
      linkedinLinkError: "Please enter a valid LinkedIn link"
  };

  var validationResults = {
      facebookLinkError: !urlRegex.test(facebookLink),
      twitterLinkError: !urlRegex.test(twitterLink),
      instagramLinkError: !urlRegex.test(instagramLink),
      linkedinLinkError: !urlRegex.test(linkedinLink)
  };

  Object.keys(validationResults).forEach(function(key) {
      if (validationResults[key]) {
          printError(key, errorMessages[key]);
      } else {
          printError(key, ""); 
      }
  });

  var hasErrors = Object.values(validationResults).some(function(result) {
      return result;
  });

  if (!hasErrors) {
    var modal = document.getElementById("saveChanges-modal");
    modal.style.display = "block";
  
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    var closeModalBtn = document.getElementById("closeModalBtn");
    closeModalBtn.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    var socialLinksInputs = document.querySelectorAll('#socialLinksContent input[type="text"]');
    var saveChangesButton = document.querySelector('#socialLinksContent button');

    socialLinksInputs.forEach(function(input) {
        input.disabled = true;
    });

    saveChangesButton.style.display = "none";
    editButton2.style.display = "block";

    var modal = document.getElementById("saveChanges-modal");
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    var closeModalBtn = document.getElementById("closeModalBtn");
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
  }
}

function toggleEdit() {
  var socialLinksInputs = document.querySelectorAll('#socialLinksContent input[type="text"]');
  var saveChangesButton = document.getElementById("saveChangesButton");
  var editButton = document.getElementById("editButton2");

  socialLinksInputs.forEach(function(input) {
    input.value = ""; 
  });

  socialLinksInputs.forEach(function(input) {
    input.disabled = !input.disabled;
  });

  if (saveChangesButton.style.display === "none") {
    saveChangesButton.style.display = "block";
    editButton.style.display = "none";
  } else {
    saveChangesButton.style.display = "none";
    editButton.style.display = "block";
  }
}

function showPassword(inputId, checkboxId) {
  var passwordInput = document.getElementById(inputId);
  var checkbox = document.getElementById(checkboxId);
  
  checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
          passwordInput.type = 'text';
      } else {
          passwordInput.type = 'password';
      }
  });
}
