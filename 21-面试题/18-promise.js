// setTimeout(() => {
//     console.log(1);
// }, 3000);
// setTimeout(() => {
//     console.log(2);
// }, 2000);
// setTimeout(() => {
//     console.log(3);
// }, 1000);

// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//         }, 1000);
//     }, 2000);
// }, 3000);

const p = new Promise((resolve, reject) => {
    resolve('任务成功得到的数据');
    reject('任务失败的信息');
});

p.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
