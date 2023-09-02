const queue = [];
queue.push(1);
queue.push(2);
const item1 = queue.shift();
const item2 = queue.shift();
// 应用场景
// 食堂排队打饭、JS异步中的任务队列、计算最近请求次数
// 总结
// 队列是一个先进先出的数据结构
// JavaScript中没有队列，但可以用Array实现队列的所有功能
// 队列常用操作：push、shift、queue[0]
