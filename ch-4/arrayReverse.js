/*

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
should take an array as its argument and produce a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument
 by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you 
expect to be useful in more situations? Which one runs faster?

*/

function reverseArray(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) reversedArray.push(array[i]);
  return reversedArray;
}

function reverseArrayInPlace(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
