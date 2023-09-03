// 链表是什么
// 多个元素组成的列表
// 元素存储不连续，用next指针连在一起

// 数组vs链表
// 数组：增删非首尾元素时往往需要移动元素
// 链表：增删非首尾元素时，不需要移动元素，只需要更改next指针的指向即可

// JavaScript中的链表
// JavaScript中没有链表
// 可以用Object模拟链表

const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;

// 遍历链表
let p = a;
while (p) {
    console.log(p.val);
    p = p.next;
}

// 插入
const e = { val: 'e' };
c.next = e;
e.next = d;

// 删除
c.next = d;

// 总结
// 链表里的元素存储不是连续的，通过next连接
// JavaScript中没有链表，但是可以用Object模拟链表
// 链表常用操作：修改next、遍历链表
