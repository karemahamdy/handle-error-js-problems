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

