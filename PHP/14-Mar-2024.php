
 <?php

  Instructions:

  // Complete the function that accepts a string parameter, 
  // and reverses each word in the string. All spaces in the string should be retained.

  Examples:
  // "This is an example!" ==> "sihT si na !elpmaxe"
  // "double  spaces"      ==> "elbuod  secaps"
  
  function reverseWords($str)
  {
    // Split the input string into an array of words
    $words = explode(" ", $str);

    // Iterate through each word
    foreach ($words as &$word) {
      // Reverse the word using the strrev method of PHP
      $word = strrev($word);
    }

    // Join the reversed words back into a string
    $reversedString = implode(" ", $words);

    // Return the reversed string
    return $reversedString;
  }

  reverseWords('double spaced words')
  ?>
