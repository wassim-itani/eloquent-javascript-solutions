/*

As generic blobs of values, objects can be used to build all sorts of data structures. A common data structure is 
the list (not to be confused with arrays). A list is a nested set of objects, with the first object holding a 
reference to the second, the second to the third, and so on:

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

The resulting objects form a chain.

A nice thing about lists is that they can share parts of their structure. For example, if I create two new values 
{value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), 
they are both independent lists, but they share the structure that makes up their last three elements. 
The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
Also write a listToArray function that produces an array from a list. Add the helper functions prepend, which takes
an element and a list and creates a new list that adds the element to the front of the input list, and nth, 
which takes a list and a number and returns the element at the given position in the list 
(with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

*/

function arrayToList(array) {
  // Build the list from the end to start
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  const array = [];
  while (list != null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function prepend(el, list) {
  return { value: el, rest: list };
}

function nth(list, num) {
  let count = 0;
  while (list !== null) {
    if (count === num) return list.value;
    count++;
    list = list.rest;
  }
  return undefined;
}

function recursiveNth(list, num) {
  // TODO
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
