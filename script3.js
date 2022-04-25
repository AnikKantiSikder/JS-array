
// Array of objects
const names = [
    {name: 'Anik', age: 25},
    {name: 'Badhon', age: 26},
    {name: 'Niaz', age: 24}
];

// Array of functions
const sum = (a,b) => a + b;
const sub = (a,b) => a - b;
const times = (a,b) => a*b;
const div = (a,b) => a / b;
const mod = (a,b) => a % b;

const a = 10;
const b = 20;

const funArray = [sum, sub, times, div, mod];

for (i=0; i<funArray.length; i++){
    const result = funArray[i](a,b);
    // console.log(`[${funArray[i].name}] Result: ${result}`);
}

// Array of Arrays
const pointTable = [
    [0,0],
    [3,5],
    [5,7],
    [10,23]
];

// One dimensional traverse
for(let i=0; i<pointTable.length; i++){
    // console.log(`Point ${i}: x = ${pointTable[i][0]}
    //  and y = ${pointTable[i][1]}`);
}

// Two dimensional traverse
for(i=0; i<pointTable.length; i++){
    for(let j=0; j<pointTable[i].length; j++){
        // console.log(`Points [${i}, ${j}] = ${pointTable[i][j]}`);
    }
}

// Two dimensional traverse
const numbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i=0; i<numbers.length; i++) {
    for(j=0; j<numbers[i].length; j++) {
        // console.log(numbers[i][j]);
    }
}

// Matrix example
const matrixA = [
    [1,3],
    [1,0],
    [1,2]
];

const matrixB = [
    [0,0],
    [7,5],
    [2,1]
];

const matrixSum = (matrixA, matrixB) => {
    const result = [];
    for(let i=0; i<matrixA.length; i++) {
        const row = [];
        for(let j=0; j<matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

const matrixC = matrixSum(matrixA, matrixB);
console.log(matrixC);


