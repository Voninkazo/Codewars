// INSTRUCTIONS

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//  *********** Examples: **************

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

// ******* STEPS ********
// Create a function that take a string of words as a parameter
// Split the the string by space to get an array of words
// Map through the array and then split each item again to get an array of letters
// Then check if the lenght of array is more than 4, reverse the array and then join it to get the reversed word
// If the length is less than 5, just join the word back
// Then at the end, return the array

function spinWords(string) {
  const arrayOfWords = string.split(" ");
  const phrase = arrayOfWords.map((word) => {
    const arrayOfLetters = word.split("");
    if (arrayOfLetters.length >= 5) {
      return arrayOfLetters.reverse().join("");
    } else {
      return arrayOfLetters.join("");
    }
  });
  return phrase.join(" ");
}

spinWords("Hey fellow warriors");
