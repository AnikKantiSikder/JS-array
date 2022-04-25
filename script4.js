// Array push
const arrP1 = [1, 2, 3];
arrP1.push(5,6,7);
const arrP2 = [8,9];
arrP1.push(...arrP2);
// OR before ES6
// Array.prototype.push.apply(arrP1, arrP2);
console.log(arrP1);

// unshift
const arrU1 = [5,6,7];
const arrU2 = [1,2,3];
arrU1.unshift(4);
Array.prototype.unshift.apply(arrU1, arrU2);
console.log(arrU1);

// splice
const arrS1 = [1,2,3,5,9];
arrS1.splice(3, 0, 4);
const arrS2 = [6,7,8];
arrS1.splice(5,0,...arrS2);
console.log(arrS1);


const students = [
    {id: 1, name: 'Anik', age: 25},
    {id: 2, name: 'Badhon', age: 26},
    {id: 3, name: 'Niaz', age: 24},
    {id: 4, name: 'Sakib', age: 24}
];

const givenId = 3;
const updatedName = 'Niaz Khan';

for(let i=0; i<students.length; i++) {
    if(givenId === students[i].id) {
        students[i].name = updatedName;
        break;
    }
}

console.log(students);