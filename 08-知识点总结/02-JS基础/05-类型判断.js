// 父类
class People {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name}在吃东西`);
    }
}

// 子类
class Student extends People {
    constructor(name, number) {
        super(name);
        this.number = number;
    }
    sayHi() {
        console.log(`我的姓名是${this.name},学号为${this.number}`);
    }
}
// 子类
class Teacher extends People {
    constructor(name, major) {
        super(name);
        this.major = major;
    }
    teach() {
        console.log(`${this.name}老师教你${this.major}`);
    }
}

const jack = new Student('杰克', 1);
jack.sayHi();
jack.eat();
const spike = new Teacher('斯派克', '飞镖');
spike.teach();
spike.eat();

console.log(jack instanceof Student);
console.log(jack instanceof People);
console.log(jack instanceof Object);