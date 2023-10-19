const stack = [];
stack.push(1);
stack.push(2);
const item1 = stack.pop();
const item2 = stack.pop();
// 应用场景
// 十进制转二进制、判断字符串的括号是否有效、函数调用堆栈
// 技术要点
// 栈是一个后进先出的数据结构
// JavaScript中没有栈，但可以用Array实现栈的所有功能
// 栈常用操作：push、pop、stack[stack.length - 1]
