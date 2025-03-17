/*

Arrays also have an every method analogous to the some method. This method returns true when the given function
 returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, 
 and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one
 using a loop and one using the some method.

*/

function every(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}

function everyTwo(array, test) {
  return !array.some((el) => !test(el));
}

console.log(every([1, 3, 5], (n) => n < 10));
console.log(everyTwo([2, 4, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));
