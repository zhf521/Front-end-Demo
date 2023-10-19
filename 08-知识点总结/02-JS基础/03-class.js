class Student {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    sayHi() {
        console.log(`我的姓名是${this.name},学号为${this.number}`);
    }
}

let jack = new Student('杰克', 1);
jack.sayHi();
let mack = new Student('麦克', 2);
mack.sayHi();
