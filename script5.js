
const arr1 = [1,2,3];
const arr2 = [4,5,6];

// Concat multiple arrays
const arr3 = arr1.concat(arr2);
console.log(arr3);

// Using spread
const arr4 = [...arr1, ...arr2];
console.log(arr4);

const arr5 = [].concat(arr1, arr2);
console.log(arr5);
//----------------------------------------------------------


// Usig slice() method
const arr = [1,2,3,4,5,6];

// Slice
const sliced = arr.slice(1,3);
console.log(sliced);

// Clone an array
const cloned = arr.slice();
console.log(cloned);

// Changing array like objects to array

