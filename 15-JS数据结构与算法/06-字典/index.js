// 字典与集合类似，字典也是一种存储唯一值的数据结构，但它是以键值对的形式来存储
// ES6中有字典，名为Map
// 字典常用操作：键值对的增删改查

const m = new Map();

// 增
m.set('a', 'aa');
m.set('b', 'bb');
console.log(m);
console.log('------');

// 删除
m.delete('b');
console.log(m);
console.log('------');

m.clear();
console.log(m);
console.log('------');

// 改
m.set('a', 'aaa');
console.log(m);
console.log('------');
