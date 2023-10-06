// Initialize userInput to a non-number value to enter the loop
var userInput = NaN;

// Use a while loop to ensure a valid number is entered
while (isNaN(userInput)) {
  // Get input from the user
  userInput = prompt("Enter a whole number");

  // Convert the input to an integer
  var chosenNumber = parseInt(userInput);

  // Check if userInput is not a number (NaN)
  if (isNaN(chosenNumber)) {
    // Display an error message
    alert("Must be a whole number");
  }
}

// The rest of your code remains the same

var step1Result = chosenNumber + 9;
var step2Result = step1Result * 2;
var step3Result = step2Result - 4;
var step4Result = step3Result / 2;
var finalResult = step4Result - chosenNumber;

alert("Your final number is: " + finalResult );

document.write("<ul>");
document.write("<li>I added 9 to " + chosenNumber + ". The new number is " + step1Result + "</li>");
document.write("<li>I multiplied " + step1Result + " by 2. The new number is " + step2Result + "</li>");
document.write("<li>I subtracted 4 from " + step2Result + ". The new number is " + step3Result + "</li>");
document.write("<li>I divided " + step3Result + " by 2. The new number is " + step4Result + "</li>");
document.write("<li>I subtracted your original number of " + chosenNumber + " from " + step4Result +  "</li>");
document.write("</ul>");

document.write("<h2>Your final number is: " + finalResult + "</h2>");

document.write('<h1>Thanks for playing. <a href="index.html" onclick="playGame()">Play again?</a></h1>');
