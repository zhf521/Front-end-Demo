// 快速排序的思路
// 分区：从数组中任意选择一个“基准”,所有比基准小的元素放在基准前面，比基准大的元素放在基准的后面
// 递归：递归地对基准前后的子数组进行分区

// 递归的时间复杂度是O(logN)
// 分区操作的时间复杂度是O(n)
// 时间复杂度：O(n*logN)

Array.prototype.quickSort = function () {
    const rec = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }
        const left = [];
        const right = [];
        const mid = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < mid) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...rec(left), mid, ...rec(right)];
    };
    const res = rec(this);
    res.forEach((n, i) => {
        this[i] = n;
    });
};

const arr = [5, 4, 3, 2, 1];
arr.quickSort();
console.log(arr);
