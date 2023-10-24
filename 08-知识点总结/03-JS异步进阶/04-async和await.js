// async function fn1() {
//     return new Promise((resolve, reject) => {});
// }
// console.log(fn1()); // Promise

// async function fn2() {
//     return 100;
// }
// console.log(fn2()); // 相当于 Promise.resolve(100)

// async function fn1() {
//     const p1 = new Promise(() => {});
//     await p1;
//     console.log('p1'); //不会执行
// }
// fn1();

// async function fn2() {
//     const p2 = Promise.resolve(100);
//     const res = await p2;
//     console.log(res); //100
// }
// fn2();

// async function fn3() {
//     const res = await 100;
//     console.log(res); //100
// }
// fn3();

// async function fn4() {
//     const p4 = Promise.reject('error');
//     try {
//         const res = await p4;
//         console.log(res); //不会执行
//     } catch (e) {
//         console.error(e);
//     }
// }
// fn4();

async function async1() {
    console.log('async start');
    await async2();
    console.log('async1 end'); // 关键在这一步，它相当于放在消息队列中，最后执行
}

async function async2() {
    setTimeout(() => {
        console.log('async2');
    }, 1000);
}

console.log('script start');
async1();
console.log('script end');
