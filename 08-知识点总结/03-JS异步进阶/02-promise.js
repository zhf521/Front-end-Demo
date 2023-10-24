// 刚定义时，状态默认为 pending
const p1 = new Promise((resolve, reject) => {});
// 执行 resolve() 后，状态变成 fulfilled
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});
// 执行 reject() 后，状态变成 rejected
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 1000);
});
