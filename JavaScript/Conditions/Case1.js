/**
 * Create a program with one condition, for get determine whether a user entered letter includes a vowel consonant
 */

/*
    Step by step:
    1. Initialize vowel consonant [a,i,u,e,o]
    2. Get input user  
    3. enter conditions
*/

// //Initialize vowel consonant
// const consonant = ['a','i','u','e','o']

// /**
//  * readline is a module from node js environment for read input the command on line program
//  */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Step 1: Get user input
rl.question('Enter a letter: ', (userInput) => {
  // Step 2: Check input length
  if (userInput.length !== 1) {
    console.log('Please enter a single letter.');
    rl.close();
  } else {
    // Step 3: Convert input to lowercase
    userInput = userInput.toLowerCase();

    // Step 4: Check if it's a letter
    if (userInput >= 'a' && userInput <= 'z') {
      // Step 5: Check for vowel or consonant
      if (
        // const consonant = ['a','i','u','e','o']
        userInput === 'a' ||
        userInput === 'e' ||
        userInput === 'i' ||
        userInput === 'o' ||
        userInput === 'u'
      ) {
        console.log('The entered letter is a vowel.');
      } else {
        console.log('The entered letter is a consonant.');
      }
    } else {
      console.log('Please enter a valid letter (a-z).');
    }
    rl.close();
  }
});
