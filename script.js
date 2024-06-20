// problems 
// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

function validateInteger(number) 
{
  // Check if the given number is not an integer using Number.isInteger() method
  if (!Number.isInteger(number)) 
  {
    // If the number is not an integer, throw an error with a specific message
    throw new Error('Invalid number. Please input an integer.');
  }
  // Log a message indicating that the number is valid
  console.log('Number is valid:', number);
}
try{
  
  validateInteger(12)
  validateInteger(2.12)

}
catch (error){
  console.log(error.message)
}

// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

function acceptPositiveNumber (n1 , n2) {
  if (n2 === 0) {
    throw new Error ('Must be positive')
  } else {
    console.log (n1 , n2)
  }
}
acceptPositiveNumber(2,2)
acceptPositiveNumber(2,0)

//Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.
function acceptPositiveNumber (n1) {
  if (n1 < 0) {
    throw new Error ('Must be positive')
  } else {
    console.log (n1)
  }
}
acceptPositiveNumber(2)
// acceptPositiveNumber(-1)

// Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.

function checkArrayIsEmpty (arr) {
  if (arr.length == 0) {
    throw new Error ('array is empty')
  } else {
    console.log (arr)
  }
}
checkArrayIsEmpty([1,'k','h',2])
// checkArrayIsEmpty([])

// Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.
function checkStringIsEmpty (s) {
  if (s.length === 0) {
    throw new Error ('string is empty')
  } else {
    console.log (s)
  }
}
checkStringIsEmpty("karema")
// checkStringIsEmpty("")