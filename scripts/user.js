// Sondos
//user.js

function toggleOption(optionName) {
  var generalContent = document.getElementById("generalContent");
  var infoContent = document.getElementById("infoContent");
  var passwordContent = document.getElementById("passwordContent");
  var healthInfoContent = document.getElementById("healthInfoContent");
  var feedbackContent = document.getElementById("feedbackContent");

  var generalLink = document.getElementById("generalLink");
  var infoLink = document.getElementById("infoLink");
  var passwordLink = document.getElementById("passwordLink");
  var healthInfoLink = document.getElementById("healthInfoLink");
  var feedbackLink = document.getElementById("feedbackLink");

  generalContent.style.display = "none";
  infoContent.style.display = "none";
  passwordContent.style.display = "none";
  healthInfoContent.style.display = "none";
  feedbackContent.style.display = "none";

  generalLink.classList.remove("active");
  infoLink.classList.remove("active");
  passwordLink.classList.remove("active");
  healthInfoLink.classList.remove("active");
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

  } else if (optionName === "password") {
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

window.onload = function() {
  var generalLink = document.getElementById('generalLink');
  generalLink.classList.add('active');
  generalLink.style.fontWeight = 'bold';
  generalLink.style.color = '#CAF746'; 
  toggleFontWeight('generalLink');
  starRating(); 
  
};

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

    document.getElementById("detailedFeedback").disabled = true;
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

  // Clear the content of the detailed feedback text area
  document.getElementById("detailedFeedback").value = "";

  document.getElementById("detailedFeedback").disabled = false;
}

