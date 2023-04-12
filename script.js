// SELECTING HTML ELEMENTS
const currentDrawNumber = document.querySelector(".currentDrawNumber");
const generateNumber = document.querySelector(".generateNumber");
const currentDate = document.querySelector(".currentDate span");
const sBlocks = document.querySelector(".s-blocks");
const sunday = document.querySelector(".sunday");
const monday = document.querySelector(".monday");
const tuesday = document.querySelector(".tuesday");
const wednesday = document.querySelector(".wednesday");
const thursday = document.querySelector(".thursday");
const friday = document.querySelector(".friday");
const saturday = document.querySelector(".saturday");
const showBlock = document.querySelector(".active");
const sixFourtyTwo = document.querySelector(".sixFourtyTwo");
const sixFourtyFive = document.querySelector(".sixFourtyFive");
const sixFourtyNine = document.querySelector(".sixFourtyNine");
const sixFiftyFive = document.querySelector(".sixFiftyFive");
const sixFiftyEight = document.querySelector(".sixFiftyEight");

// SETTING UP DATE INFORMATION
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
const month = months[date.getMonth()]; // use getMonth() to get the month of the year and subtract 1 from the index
const day = date.getDate();
const year = date.getFullYear();
const currentDay = days[date.getDay()] // use getDay() to get the day of the week and subtract 1 from the index

currentDate.innerText = "( " + currentDay + " - " + month + " " + day + ", " + year + " )"; //

// SHOWCASING THE CURRENT DAY DRAW
switch(currentDay) {
  case "Sunday": {
    sBlocks.classList.remove("active");
    sunday.classList.add("active");
    break;
  }
  case "Monday": {
    sBlocks.classList.remove("active");
    monday.classList.add("active");
    break;
  }
  case "Tuesday": {
    sBlocks.classList.remove("active");
    tuesday.classList.add("active");
    break;
  }
  case "Wednesday": {
    sBlocks.classList.remove("active");
    wednesday.classList.add("active");
    break;
  }
  case "Thursday": {
    sBlocks.classList.remove("active");
    thursday.classList.add("active");
    break;
  }
  case "Friday": {
    sBlocks.classList.remove("active");
    friday.classList.add("active");
    break;
  }
  case "Saturday": {
    sBlocks.classList.remove("active");
    saturday.classList.add("active");
    break;
  }
  default: {
    // If currentDay doesn't match any of the cases above,
    // remove the active class from all elements
    sBlocks.classList.remove("active");
    break;
  }
}


// GENERATING A RANDOM NUMBER BASED ON IT REFERENCE
function generateRandomNumber(num) {
  const result = [];
  while (result.length < 6) {
    const randomNumber = Math.floor(Math.random() * num) + 1;
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }
  generateNumber.textContent = result.sort(function(a, b) {return a - b}).join(", ");
  currentDrawNumber.textContent = "6/" + num;
}
