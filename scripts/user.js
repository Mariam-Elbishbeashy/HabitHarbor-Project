// Sondos
//user.js

function toggleOption(optionName) {
  var generalContent = document.getElementById("generalContent");
  var infoContent = document.getElementById("infoContent");
  var passwordContent = document.getElementById("passwordContent");

  var generalLink = document.getElementById("generalLink");
  var infoLink = document.getElementById("infoLink");
  var passwordLink = document.getElementById("passwordLink");

  if (optionName === "general") {
      generalContent.style.display = "block";
      infoContent.style.display = "none";
      passwordContent.style.display = "none";

      generalLink.classList.add('active');
      infoLink.classList.remove('active');
      passwordLink.classList.remove('active');
  } else if (optionName === "info") {
      generalContent.style.display = "none";
      infoContent.style.display = "block";
      passwordContent.style.display = "none";

      generalLink.classList.remove('active');
      infoLink.classList.add('active');
      passwordLink.classList.remove('active');
  } else if (optionName === "password") {
      generalContent.style.display = "none";
      infoContent.style.display = "none";
      passwordContent.style.display = "block";

      generalLink.classList.remove('active');
      infoLink.classList.remove('active');
      passwordLink.classList.add('active');
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
 
