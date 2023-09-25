let obj = [1, 2, 3];

// let res = Object.prototype.toString.call(obj) === '[object Array]';

// let res = obj.__proto__ === Array.prototype;

// let res = Array.isArray(obj);

// let res = obj instanceof Array;

let res = Array.prototype.isPrototypeOf(obj);

console.log(res);
