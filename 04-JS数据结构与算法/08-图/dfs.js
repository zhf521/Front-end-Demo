// 深度优先遍历算法口诀
// 访问根节点
// 对根结点的没访问过的相邻节点挨个进行深度优先遍历

const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3],
};

const visited = new Set();
const dfs = (n) => {
    console.log(n);
    visited.add(n);
    graph[n].forEach((c) => {
        if (!visited.has(c)) {
            dfs(c);
        }
    });
};

dfs(2);
