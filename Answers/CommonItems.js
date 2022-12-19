/** Given 2 arrays, create a function that let's a user know (True/False) whether these two arrays contain any common items
 e.g 
 const array1 = ['a', 'b', 'c', 'x'];
 const array2 = ['i', 'h', 'z', 'q'];
 should return false
 ------------------------------------------------------
 const array1 = ['a', 'b', 'c', 'x'];
 const array2 = ['z', 'd', 'r', 'x'];
 should return true
 */

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'd', 'r', 'x'];

// function containsCommonItem(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// } //O(a * b)

// containsCommonItem(array1, array2);

function containsCommonItem2(array1, array2) {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      const item = array1[i];
      map[item] = true;
    }
    // console.log(map);
  }
  // loop through second array and check if item in second array exists on created object
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
    console.log(true);
  }
  console.log(false);
  return false;
}

containsCommonItem2(array1, array2);

function containsCommonItem3(array1, array2) {
  return array1.some((item) => array2.includes(item));
}
containsCommonItem3(array1, array2);
