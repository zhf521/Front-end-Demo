// 二分搜索的思路
// 从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束
// 如果目标值大于或者小于中间元素，则在大于或小于中间元素的那一半数组中搜索

// 二分搜索的时间复杂度
// 每一次比较都使搜索范围缩小一半
// 时间复杂度：O(logN)

Array.prototype.binarySearch = function (item) {
    let low = 0;
    let high = this.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = this[mid];
        if (element < item) {
            low = mid + 1;
        } else if (element > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};

const res = [1, 2, 3, 4, 5].binarySearch(4);
console.log(res);
