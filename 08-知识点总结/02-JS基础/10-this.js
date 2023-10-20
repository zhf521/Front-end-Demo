// this 场景1
// function fn1() {
//     console.log(this);
// }
// fn1();

// fn1.call({ x: 100 });

// const fn2 = fn1.bind({ x: 200 });
// fn2();

// // this 场景2
// const zhangsan = {
//     name: '张三',
//     sayHi() {
//         console.log(this);
//     },
//     wait() {
//         setTimeout(function () {
//             console.log(this);
//         }, 1000);
//     },
//     waitAgain() {
//         setTimeout(() => {
//             console.log(this);
//         }, 1000);
//     },
// };

// zhangsan.sayHi();
// zhangsan.wait();
// zhangsan.waitAgain();

// this 场景3
class People {
    constructor(name) {
        this.name = name;
        this.age = 20;
    }
    sayHi() {
        console.log(this);
    }
}

const lisi = new People('张三');
lisi.sayHi();
