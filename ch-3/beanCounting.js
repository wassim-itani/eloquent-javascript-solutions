/*

You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). 
The resulting value will be a string containing only one character (for example, "b"). The first character has 
position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character 
string has length 2, and its characters have positions 0 and 1.

Write a function called countBs that takes a string as its only argument and returns a number that indicates how many
uppercase B characters there are in the string. Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted (rather than counting only 
uppercase B characters). Rewrite countBs to make use of this new function.

*/

function countChar(text, char) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) count++;
  }
  return count;
}

function countBs(text) {
  return countChar(text, "B");
}

console.log(countBs("BoB"));
console.log(countChar("JavaScript", "a"));
