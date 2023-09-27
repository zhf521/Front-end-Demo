function myNew(constructor, ...args) {
    // 新建一个空对象
    const obj = {};
    // 对象原型为构造函数的prototype
    obj.__proto__ = constructor.prototype;
    // 将this指向新建对象
    const result = constructor.apply(obj, args);
    // 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象
    if (
        result &&
        (typeof result === 'object' || typeof result === 'function')
    ) {
        return result;
    }
    return obj;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

console.log(new Person('李四', 18));

console.log(myNew(Person, '张三', 19));
