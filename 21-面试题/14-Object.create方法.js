function myCreate(obj) {
    function F() {} //定义一个构造函数
    F.prototype = obj; //给构造函数的原型赋值
    return new F(); //返回构造函数的实例
}
