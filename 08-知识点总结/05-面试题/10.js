function max() {
    const nums = Array.prototype.slice.call(arguments); //变为数组
    let max = 0;
    nums.forEach((n) => {
        if (n > max) {
            max = n;
        }
    });
    return max;
}

let res = max(1, 2, 3, 4, 5);
console.log(res);
