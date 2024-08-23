//Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

var massMark = 78;
var heightMark = 1.75; 

var massJohn = 85;
var heightJohn = 1.8; 

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);


var markHigherBMI = BMIMark > BMIJohn;

console.log("BMI Mark:", BMIMark);
console.log("BMI John:", BMIJohn);
console.log("BMI Mark hon John ?", markHigherBMI);

//Coding Challenge #2
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

if (markHigherBMI) {
    console.log(`BMI Mark (${BMIMark.toFixed(1)}) cao hon BMI John (${BMIJohn.toFixed(1)})!`);
} else {
    console.log(`BMI John (${BMIJohn.toFixed(1)}) cao hon BMI Mark (${BMIMark.toFixed(1)})!`);
}

