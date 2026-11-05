// ==========================
// Part 1: Date Display
// ==========================

// 1. Create a Date object
var date = new Date(); // create a new Date object that represents the current date and time.
// 2. Get the current month, day, and year
var month = date.getMonth(); // Months are 0-based in JavaScript, so January is 0
var day = date.getDate();
var year = date.getFullYear();
// 3. Adjust month if needed (JavaScript months are 0-based)
month = month + 1;
// 4. Add leading zeros to month/day if needed
if (month < 10) {
  month = "0" + month; // Add leading zero to month if less than 10
}
if (day < 10) {
  day = "0" + day; // Add leading zero to day if less than 10
}
// 5. Create a string in the format: "Today is MM/DD/YYYY"
var dateOutput = "Today is " + month + "/" + day + "/" + year;
// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").innerHTML = dateOutput; //inneerHTML is used to display the dateOutput string in the HTML element with the id "dateOutput".

// ==========================
// Part 2: Number Conversion
// ==========================


var value1 = "25"; // numeric string
var value2 = "130"; // numeric string
var value3 = "19.75"; // decimal string
var value4 = "great"; // non-numeric string


//    a. Convert the value using Number()
var num1 = Number(value1);
var num2 = Number(value2); //this line converts the string value2 ("130") into a number using the Number() function and assigns it to the variable num2.
var num3 = Number(value3);
var num4 = Number(value4);
//    b. Check if it is NaN using Number.isNaN()
var isNaN1 = Number.isNaN(num1); //isNaN is a function that checks if a value is NaN (Not-a-Number). It returns true if the value is NaN, and false otherwise. In this case, it checks if num1 is NaN and assigns the result to the variable isNaN1.
var isNaN2 = Number.isNaN(num2);
var isNaN3 = Number.isNaN(num3);
var isNaN4 = Number.isNaN(num4);
//    c. Check if it is an integer using Number.isInteger()
var isInteger1 = Number.isInteger(num1); //isInteger is a function that checks if a value is an integer. It returns true if the value is an integer, and false otherwise. In this case, it checks if num1 is an integer and assigns the result to the variable isInteger1.
var isInteger2 = Number.isInteger(num2);
var isInteger3 = Number.isInteger(num3);
var isInteger4 = Number.isInteger(num4);


// "Original: '25' -> Converted: 25 -> isNaN: false -> isInteger: true"
var result1 =
  "Original: '" +
  value1 +
  "' -> Converted: " +
  num1 +
  " -> isNaN: " +
  isNaN1 +
  " -> isInteger: " +
  isInteger1;
// Display the result for value1
var result2 =
  "Original: '" +
  value2 +
  "' -> Converted: " +
  num2 +
  " -> isNaN: " +
  isNaN2 +
  " -> isInteger: " +
  isInteger2;
// Display the result for value2
var result3 =
  "Original: '" +
  value3 +
  "' -> Converted: " +
  num3 +
  " -> isNaN: " +
  isNaN3 +
  " -> isInteger: " +
  isInteger3;
// Display the result for value3
var result4 =
  "Original: '" +
  value4 +
  "' -> Converted: " +
  num4 +
  " -> isNaN: " +
  isNaN4 +
  " -> isInteger: " +
  isInteger4;
// Display the result for value4


var finalResult =
  result1 + "<br>" + result2 + "<br>" + result3 + "<br>" + result4; // Combine all results into a single string with line breaks


// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML = finalResult; // Display the finalResult string in the HTML element with the id "numberConversionOutput".

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
var mathNum1 = 10;
var mathNum2 = 5;
var mathNum3 = 2;
//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//
var addition = mathNum1 + mathNum2; // 10 + 5 = 15
var multiplication = mathNum2 * mathNum3; // 5 * 2 = 10
var division = mathNum1 / mathNum3; // 10 / 2 = 5

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//
var formattedDivision = division.toFixed(2); // Format division result to 2 decimal places

// 4. Build a string showing your results
//
var mathOutput =
  "Addition: " +
  mathNum1 +
  " + " +
  mathNum2 +
  " = " +
  addition +
  "<br>" +
  "Multiplication: " +
  mathNum2 +
  " * " +
  mathNum3 +
  " = " +
  multiplication +
  "<br>" +
  "Division: " +
  mathNum1 +
  " / " +
  mathNum3 +
  " = " +
  formattedDivision;

// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathOutput;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//

// Check if num4 is NaN. num4 is "great", which is not a number, so it will be NaN.
var test1;

if (Number.isNaN(num4)) {
  test1 = "The value '" + value4 + "' is not a valid number.";
} else {
  test1 = "The value '" + value4 + "' is a valid number.";
}


// Check if the addition result is greater than 20. addition is 15, which is not greater than 20, so the else block will execute.
var test2;
if (addition > 20) {
  test2 = "The addition result '" + addition + "' is greater than 20.";
} else {
  test2 = "The addition result '" + addition + "' is not greater than 20.";
}

// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)
var conditionalOutput = test1 + "<br>" + test2;
document.getElementById("conditionalOutput").innerHTML = conditionalOutput;
