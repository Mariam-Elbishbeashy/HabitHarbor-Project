
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-100%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFifth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});



function validateForm() {
  var firstName = document.getElementById('fname').value;
  var lastName = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var phoneNumber = document.getElementById('number').value;
  var dateOfBirth = document.getElementById('age').value;
  var gender = document.getElementById('gender').value;
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regular expression for password validation (at least 6 characters long)
  const passwordRegex = /^.{6,}$/;

  // Regular expression for positive integer (weight and height)
  const positiveIntegerRegex = /^\d+$/;

  // Validate first name and last name (only letters, at least 2 characters)
  const nameRegex = /^[a-zA-Z]{2,}$/;

  // Validate gender (must be Male, Female, or Other)
  const genderRegex = /^(Male|Female|Other)$/i;

  if (!firstName || !lastName || !email || !phoneNumber || !dateOfBirth || !gender || !weight || !height || !username || !password) {
    alert('Please fill in all fields.');
    return false;
  }

  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    alert('First name and last name must contain only letters and be at least 2 characters long.');
    return false;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (!phoneNumber.match(positiveIntegerRegex)) {
    alert('Phone number must be a valid number.');
    return false;
  }

  if (!dateOfBirth) {
    alert('Please select a valid date of birth.');
    return false;
  }

  if (!genderRegex.test(gender)) {
    alert('Gender must be Male, Female, or Other.');
    return false;
  }

  if (!weight.match(positiveIntegerRegex) || weight < 0) {
    alert('Weight must be a positive integer.');
    return false;
  }

  if (!height.match(positiveIntegerRegex) || height < 0) {
    alert('Height must be a positive integer.');
    return false;
  }

  if (!passwordRegex.test(password)) {
    alert('Password must be at least 6 characters long.');
    return false;
  }

  else{
     return true;
  }
 
}

