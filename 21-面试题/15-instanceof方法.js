function myInstanceof(target, origin) {
    const op = origin.prototype;
    let tp = target.__proto__;
    while (true) {
        if (tp === null) {
            return false;
        }
        if (tp === op) {
            return true;
        }
        tp = tp.__proto__;
    }
}

let arr = [1, 2, 3];
console.log(myInstanceof(arr, Array));
