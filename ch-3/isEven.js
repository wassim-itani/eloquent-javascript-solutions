/*

We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.
One is odd.

For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

*/

function isEvenOne(num) {
  if (num === 0) return true;
  if (num === 1) return false;
  return isEvenOne(num - 2);
}

console.log(isEvenOne(50));
console.log(isEvenOne(75));
// console.log(isEvenOne(-1)); Error -> Infinite recursion -> Stack overflow

function isEvenTwo(num) {
  if (num === 0) return true;
  if (num === 1) return false;
  if (num < 0) return isEvenTwo(-num); // Negate the number with a unary negation operator
  return isEvenTwo(num - 2);
}

console.log(isEvenTwo(-1));
