// 广度优先遍历
// 新建一个队列，把根结点入队
// 把队头出队并访问
// 把队头的没访问过的相邻节点入队
// 重复第二、三步，直到队列为空

const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3],
};

const visited = new Set();
visited.add(2);
const q = [2];
while (q.length) {
    const n = q.shift();
    console.log(n);
    graph[n].forEach((c) => {
        if (!visited.has(c)) {
            q.push(c);
            visited.add(c);
        }
    });
}
