// // // console.log('1-2-3'.split('-')); // [ '1', '2', '3' ]
// // // console.log([1, 2, 3].join('-')); // 1-2-3

// // const arr = [1, 2, 3, 4, 5];
// // let a = arr.pop();
// // console.log(arr, a);

// // console.log(arr);

// const arr = [100, 200, 300];
// const arr1 = arr.concat([400, 500]);
// const arr2 = arr.map((num) => num * 10);
// const arr3 = arr.filter((num) => num > 100);
// const arr4 = arr.slice(-1);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

console.log([10, 20, 30].map(parseInt));

console.log(
    [10, 20, 30].map((num, index) => {
        return parseInt(num, 10);
    })
);
[10, 20, 30].map((num, index) => {
    return parseInt(num, 10);
});
