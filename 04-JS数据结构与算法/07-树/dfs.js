// 深度优先遍历算法口诀：
// 访问根节点
// 对根节点的children挨个进行深度优先遍历

const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: [],
                },
                {
                    val: 'e',
                    children: [],
                },
            ],
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: [],
                },
                {
                    val: 'g',
                    children: [],
                },
            ],
        },
    ],
};

const dfs = (root) => {
    console.log(root.val);
    root.children.forEach(dfs);
};
dfs(tree);
