let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add('a');
let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 });
console.log(mySet);
console.log('------');

const has = mySet.has(1);
console.log(has);
console.log('------');

mySet.delete(5);
console.log(mySet);
console.log('------');

for (let item of mySet) {
    console.log(item);
}
console.log('------');

for (let item1 of mySet.keys()) {
    console.log(item1);
}
console.log('------');

for (let item2 of mySet.values()) {
    console.log(item2);
}
console.log('------');

for (let item3 of mySet.entries()) {
    console.log(item3);
}
console.log('------');

const myArr = [...mySet];
console.log(myArr);
console.log('------');

const myArr1 = Array.from(mySet);
console.log(myArr1);
console.log('------');

const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2);
console.log('------');

const intersection = new Set([...mySet].filter((x) => mySet2.has(x)));
console.log(intersection);
console.log('------');

const difference = new Set([...mySet].filter((x) => !mySet2.has(x)));
console.log(difference);
console.log('------');
