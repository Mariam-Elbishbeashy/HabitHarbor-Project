// Sondos
//user.js

function toggleOption(optionName) {
  var generalContent = document.getElementById("generalContent");
  var infoContent = document.getElementById("infoContent");
  var passwordContent = document.getElementById("passwordContent");
  var healthInfoContent = document.getElementById("healthInfoContent");

  var generalLink = document.getElementById("generalLink");
  var infoLink = document.getElementById("infoLink");
  var passwordLink = document.getElementById("passwordLink");
  var healthInfoLink = document.getElementById("healthInfoLink"); 

  if (optionName === "general") {
      generalContent.style.display = "block";
      infoContent.style.display = "none";
      passwordContent.style.display = "none";
      healthInfoContent.style.display = "none"; 

      generalLink.classList.add('active');
      infoLink.classList.remove('active');
      passwordLink.classList.remove('active');
      healthInfoLink.classList.remove('active'); 
  } else if (optionName === "info") {
      generalContent.style.display = "none";
      infoContent.style.display = "block";
      passwordContent.style.display = "none";
      healthInfoContent.style.display = "none"; 

      generalLink.classList.remove('active');
      infoLink.classList.add('active');
      passwordLink.classList.remove('active');
      healthInfoLink.classList.remove('active'); 
  } else if (optionName === "password") {
      generalContent.style.display = "none";
      infoContent.style.display = "none";
      passwordContent.style.display = "block";
      healthInfoContent.style.display = "none"; 

      generalLink.classList.remove('active');
      infoLink.classList.remove('active');
      passwordLink.classList.add('active');
      healthInfoLink.classList.remove('active'); 
  } else if (optionName === "healthInfo") { 
      generalContent.style.display = "none";
      infoContent.style.display = "none";
      passwordContent.style.display = "none";
      healthInfoContent.style.display = "block";

      generalLink.classList.remove('active');
      infoLink.classList.remove('active');
      passwordLink.classList.remove('active');
      healthInfoLink.classList.add('active');
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

  var modal = document.getElementById("myModal");
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
