// 插入排序思路
// 从第二个数开始往前比
// 比他大就往后排
// 以比类推进行到最后一个数

// 时间复杂度
// 两个嵌套循环
// 时间复杂度：O(n^2)

Array.prototype.insertionSort = function () {
    for (let i = 1; i < this.length; i++) {
        const temp = this[i];
        let j = i;
        while (j > 0) {
            if (this[j - 1] > temp) {
                this[j] = this[j - 1];
            } else {
                break;
            }
            j--;
        }
        this[j] = temp;
    }
};

const arr = [5, 4, 3, 2, 1];
arr.insertionSort();
console.log(arr);
