function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    let result;
    if (obj instanceof Array) {
        result = [];
    } else {
        result = {};
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key]);
        }
    }
    return result;
}

const obj1 = { x: 100, y: 200 };
const obj2 = deepClone(obj1);
obj1.x = 101;
console.log(obj2.x);
