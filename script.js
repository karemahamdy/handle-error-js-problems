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

//Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.
function checkInvalidArray(arr , index) {
 if (index < 0 || index >= arr.length) {
  throw new Error ('index is invalid')
 }
 else {
  console.log ("valid")
}
}
checkInvalidArray([1, 2, 3, 4, 5] , 1)

// Write a JavaScript program that demonstrates the use of the 'try-catch-finally' statement to catch and handle an error, and then execute some cleanup code in the 'finally' block.
// Define a function named divide_Numbers that takes two parameters: x and y
function divide_Numbers(x, y) {
  try {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new TypeError('Invalid arguments. Both arguments should be numbers.');
    }
    if (y === 0) {

      throw new Error('Invalid divisor. Cannot divide by zero.');
    }
    
    const result = x / y;
  
    console.log('Result:', result);
  } catch (error) {
    
    console.log('Error:', error.message);
  } finally {
      
    console.log('Cleanup code executed.');
  }
}

divide_Numbers(10, 2);  
divide_Numbers(10, 0); 
divide_Numbers(10, '2'); 


//Write a JavaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when accessing an undefined variable.

// Define a function named access_Variable that attempts to access an undefined variable
function access_Variable() {
  try {
    console.log(undefinedVariable);
  } catch (error) {  
    if (error instanceof ReferenceError) {
      console.log('ReferenceError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }
}
access_Variable();


// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.
// Try block to handle potential errors
try {
  // Declare a constant variable undefinedObject and assign it the value undefined
  const undefinedObject = undefined;
  // Access a property of the undefined object, which will result in an error
  console.log(undefinedObject.property); // Accessing property of undefined object
} 
// Catch block to handle errors thrown in the try block
catch (error) {
  // Check if the error is an instance of TypeError
  if (error instanceof TypeError) 
  {
    // Log an error message indicating property access to an undefined object
    console.log('Error: Property access to undefined object');
  } 
  // If the error is not a TypeError, rethrow the error
  else 
  {
    throw error; // Rethrow the error if it's not a TypeError
  }
}


