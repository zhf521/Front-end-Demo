// 使用 new Object() 创建新对象
const obj1 = new Object();
obj1.name = 'obj1';
obj1.sayHello = function () {
    console.log(`Hello,I am ${this.name}`);
};
console.log(obj1); // {name:'obj1',sayHello: f()},obj1.__proto__ === Object.prototype

// 使用 Object.create() 创建新对象
const proto = { name: 'proto' };
const obj2 = Object.create(proto);
console.log(obj2); // {},obj2.__proto__ === proto
obj2.sayHello = function () {
    console.log(`Hello,I am ${this.name}`);
};
obj2.sayHello(); // Hello,I am proto

// 使用 Object.create() 创建新对象，并传入 null
const obj3 = Object.create(null);
console.log(obj3); // {}
console.log(obj3.__proto__); // undefined
