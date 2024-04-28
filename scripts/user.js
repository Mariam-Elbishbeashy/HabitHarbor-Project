// Sondos
//user.js

function showGeneral() {
    var generalContent = document.getElementById("generalContent");
    var generalLink = document.querySelector('.left-panel a.active');
  
    if (generalLink.textContent === "General") {
      generalContent.style.display = "block";
    } else {
      generalContent.style.display = "none";
    }
  }
  
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
  function toggleFontWeight(linkId) {
    var links = document.querySelectorAll('.left-panel a'); // Select all links
    links.forEach(function(link) {
        if (link.id === linkId) { // If it's the clicked link
            link.classList.add('active');
            link.style.fontWeight = 'bold';
            link.style.color = '#CAF746'; // Change color to green
        } else { // For other links
            link.classList.remove('active');
            link.style.fontWeight = 'normal';
            link.style.color = 'white'; // Change color to normal
        }
    });
}

// Make 'General' button bold and green by default
window.onload = function() {
    var generalLink = document.getElementById('generalLink');
    generalLink.classList.add('active');
    generalLink.style.fontWeight = 'bold';
    generalLink.style.color = '#CAF746'; // Change color to green
};



  