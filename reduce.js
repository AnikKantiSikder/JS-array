
// let numbers = [1,2,3,4,5];

// Implementing sum
// function reduceFunc(accumulator, curretValue) {
//     return accumulator + curretValue;
// }

// const sum = numbers.reduce(reduceFunc);
// console.log(sum);

// Implementing average
// const avg = numbers.reduce((acc, cur, index, arr) => {
//     acc += cur;

//     if (index === arr.length - 1) {
//         return acc / arr.length;
//     }
//     return acc;
// });

// console.log(avg);


// const names = [
//     'Anik sikder', 'BK khan', 'Niaz khan', 'Sakib hasan'
// ];


// let numbers = [1,2,3,4,5];
// const names = ['Anik', 'Badhon', 'Niaz', 'Sakib'];

// Implementing sum
// function sumFunc(accumulator, curretValue, index) {
//     console.log('Index:',index,
//      'Accumulator:', accumulator,
//      'Current value:', curretValue);
//     return accumulator + curretValue;
// }

// const sum = numbers.reduce(sumFunc,10);
// console.log(sum);

// let nestedArray = [[1,2], 3, [4,5], [6,7,8]];
// Array flat
// const flatArray1 = nestedArray.flat();
// console.log('(1)',flatArray1);

// We can do the same with reduce method
// const flatArray2 = nestedArray.reduce((acc, cur) => {
//     return acc.concat(cur);
// }, []);
// console.log('(2)',flatArray2);

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// FlatMap = Map -> Flat
// const map = arr.map((x) => [x*2]).flat();
// console.log(map);

// const flatMap = arr2.flatMap((x) => [x*2]);
// console.log(flatMap);

// Using the reduce method
// const reducedFlatMap = arr.reduce((acc, cur) =>{
//     return acc.concat(cur * 2);
// }, []);

// console.log(reducedFlatMap);

// const votes = [
//     'Java',
//     'Java',
//     'Python',
//     'Java',
//     'Javascript',
//     'Python',
//     'Javascript'
// ];

// const result = votes.reduce((acc, cur) =>{
//     if (acc[cur]) {
//         acc[cur]++;
//     } else {
//         acc[cur] = 1;
//     }
//     return acc;

// }, {});

// console.log(result);

// Implementing my own reduce method
// function myReduce(arr, cBack, init) {
//     let acc = init;
//     let start = 0;
//     if(!init) {
//         acc = arr[0];
//         start = 1;
//     }
//     for (let i = start; i < arr.length; i++) {
//         acc = cBack(acc, arr[i], i, arr);
//     }
//     return acc;
// }

// const arr = [1, 2, 3, 4, 5];

// const sum = myReduce(arr, (acc,cur) => {
//     return acc + cur;
// })

// console.log(sum);

// Reduce right
// const arr = [
//     [1,2],
//     [3,4],
//     [5,6],
//     [7,8]
// ];

// const result = arr.reduceRight((acc, cur) => {
//     return acc.concat(cur);
// }, []);

// console.log(result);

let products = [
    {name: 'Introduction to algorithm', price: 350},
    {name: 'Think like a programmer', price: 200},
    {name: 'Data structure', price: 400},
    {name: 'Introduction to algorithm', price: 350},
    {name: 'Data structure', price: 400},
    {name: 'Introduction to algorithm', price: 350}
];

const invoice = products.reduce((acc, cur) => {
    if (acc[cur.name]) {
        acc[cur.name].quantity++;
        acc[cur.name].price += cur.price;
    } else {
        acc[cur.name] = {
            price: cur.price,
            quantity: 1
        }
    }
    return acc;
}, {})

console.log(invoice);

