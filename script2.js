
// const arr = [47,5,78,63,99,14,55,39];
const names = ['Anik', 'Badhon', 'Niaz', 'Sakib']

const arr2 = new Array(10);

//Array fill
arr2.fill(0);
console.log(arr2);

//Array fill and update
const response = new Array(9);
response.fill(false);

for (let i=0; i<response.length; i++) {
    const rand = Math.floor(Math.random() * 10 +1);
    response[i] = rand > 5 ? 'X' : 'O';
}

console.log(response);

// Array is mutable
function update(arr) {
    for (i=0; i<arr.length; i++) {
        arr[i] = `(${i+1}) ${arr[i]}`;
    }
    return arr;
}

update(names);
console.log(names);

