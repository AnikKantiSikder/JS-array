//const arr = [47,5,78,63,99,14,55,39];


//Array Literal
const names = [
    'Anik',
    'Bk',
    'Niaz'
];

names[names.length] = 'Sakib';

console.log(names);


//Constructor Pattern
//const arr1 = new Array();
console.log(arr1, arr1.length);

const arr2 = new Array(5);
console.log(arr2, arr2.length);


//Factory Pattern
const arr1 = Array(5);
console.log(arr1, arr1.length);


//Array Traversing
const arr = [1,2,3,4,5];
let sum = 0;
for (let i=0; i < arr.length; i++){ 
    sum += arr[i];
}

console.log(sum);
console.log(sum / arr.length);


//Find the largest element in the array
let largest = arr[0];

for (let i =1; i <arr.length; i++){
    if(arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest);


//Find the smallest element in the array
let smallest = arr[0];

for (i=0; i<arr.length; i++){
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log(smallest);



