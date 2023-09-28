// function drive(fn) {
//     setTimeout(() => {
//         fn();
//     }, 2000);
// }

// function shopping(fn) {
//     setTimeout(() => {
//         fn();
//     }, 1000);
// }

// function run() {
//     drive(() => {
//         console.log('开车');
//         shopping(() => {
//             console.log('购物');
//         });
//     });
// }

// run();

// function drive() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('开车');
//         }, 2000);
//     });
// }

// function shopping() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('购物');
//         }, 1000);
//     });
// }

// function run() {
//     drive()
//         .then((data) => {
//             console.log(data);
//             return shopping();
//         })
//         .then((data) => {
//             console.log(data);
//         });
// }

// run();

function drive() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('开车');
        }, 2000);
    });
}

function shopping() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('购物');
        }, 1000);
    });
}

async function run() {
    const result1 = await drive();
    const result2 = await shopping();
    console.log(result1);
    console.log(result2);
}

run();
