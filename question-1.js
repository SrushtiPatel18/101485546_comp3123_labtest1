// Question 1

function lowerCaseWords(inputArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(inputArray)) {    // Checking whether the input is an array or not
      return reject("Input must be an array"); 
    }

    const words = inputArray
      .filter(item => typeof item === "string")    //filtering the non-strings
      .map(word => word.toLowerCase());    //changing the strings to lowerCase

    if (words.length > 0) {
      resolve(words);
    } else {
      reject("There are no string values in the array");   
    }
  });
}


// Example Input

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then(result => console.log("Lowercased words:", result))
  .catch(error => console.error("Error:", error));

module.exports = lowerCaseWords;