
let names = [
    'While Anik kanti sikder',
    'While Abir azim badhon',
    'While Niaz rahman khan',
    'While Sakib al hasan'
];

// Reuse functon
// function reuse(arr, logic) {
//     for(let i = 0; i < arr.length; i++) {
//         logic(arr[i], i, arr);
//     }
// }

// Extract length
// const result1 = [];
// reuse(names, value => {
//// let r = value.length;
//     result1.push(value.length);
// });
// console.log(result1);

//Get uppercase version
// const result2 = [];
// reuse(names, value => {
//     result2.push(value.toUpperCase());
// })
// console.log(result2);

// Get sliced version
// const result3 = [];
// reuse(names, value => {
//     result3.push(value.substr(6));
// });
// console.log(result3);


// Reuse functon
function reuseAndMap(arr, logic) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        const r = logic(arr[i], i, arr);
        result.push(r);
    }
    return result;
}

const lengths = reuseAndMap(names, (value) => value.length);
const uppers = reuseAndMap(names, (value) => value.toUpperCase());
const sliced = reuseAndMap(uppers, (value) => value.substr(6));

// console.log(lengths);
// console.log(uppers);
// console.log(sliced);


// Using official map() method

// const length1 = names.map((value) => value.length);
const length1 = names.map(function(value){
    return value.length;
});

// const upper1 = names.map((value) => value.toUpperCase());
const upper1 = names.map(function(value){
    return value.toUpperCase();
});

// const sliced1 = names.map((value) => value.substr(6));
const sliced1 = names.map(function(value){
    return value.substr(6);
});

// console.log(length1);
// console.log(upper1);
// console.log(sliced1);


const studentArray = [
    { id: 1, name: 'Student 1', gpa: 3.99, email: 'student1@gmail.com' },
    { id: 2, name: 'Student 2', gpa: 3.50, email: 'student2@gmail.com' },
    { id: 3, name: 'Student 3', gpa: 2.99, email: 'student3@gmail.com' },
    { id: 4, name: 'Student 4', gpa: 2.50, email: 'student4@gmail.com' },
];

const mappedStudents = studentArray.map((value) => {
    return {
        ...value,
        title: `Hello ${value.name} - Your result is here!`,
        msg: `[${value.name}]: You have got ${value.gpa}.You have ${value.gpa >= 3 ? 'Passed' : 'Failed'}`
    }
});

console.log(mappedStudents);