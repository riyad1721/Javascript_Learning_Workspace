//Create 4 Variables(int, float, string, boolean)  Using the Camel Case

var intVariable = 14;               //assign some values
var floatVariable = 14.5;           //assign some values
var stringVariable="29"             //assign some values
var booleanVariable= true;          //assign some values

//Printing the variable with assigning value 

console.log("Printing the variable with assigning value .....");
console.log("integer : " +intVariable);
console.log("Float : " +floatVariable);
console.log("string : " +stringVariable);
console.log("Boolean : " +booleanVariable);

//parse the String variable data  to integer  data and add them integer variable data

var addAfterParsing = intVariable + parseInt(stringVariable);
console.log("After parsing adding two integer value : "+addAfterParsing);

//Generate a random value from 10 to 20 and print them

var randomValue =Math.floor(Math.random() * (20-10+1) + 10);  // rules (max - min +) + min that are inclusive 10 and 20
console.log("The random value between 10 to 20 is : " +randomValue)