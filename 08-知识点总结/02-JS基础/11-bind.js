function fn1(a, b) {
    console.log('this为', this);
    console.log(a, b);
}

// const fn2 = fn1.bind({ x: 100 }, 10, 20); //bind返回一个函数，并改变this指向
// fn2();

Function.prototype.myBind = function () {
    // 将参数解析为数组
    const args = Array.prototype.slice.call(arguments);
    // 获取this（取出数组第一项，数组剩余的就是传递的参数）
    const t = args.shift();
    const self = this; //当前函数
    // 返回一个函数
    return function () {
        // 执行原函数，并返回结果
        return self.apply(t, args);
    };
};

const fn3 = fn1.myBind({ x: 300 }, 10, 20);
fn3();
