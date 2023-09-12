// 导入文件模块
let fs = require('fs');
// fs.writeFile('./file/name.txt', ',tom',{flag:'a'}, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('写入成功');
//     }
// });

fs.appendFile('./file/name.txt', ',tom',{flag:'a'}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('写入成功');
    }
});
