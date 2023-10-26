const xhr = new XMLHttpRequest();
xhr.open('请求方法', '请求url网址');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let res = xhr.responseText;
            console.log(res);
        }
    }
};

// 1. 设置请求头，告诉服务器，我传递的内容类型，是 JSON 字符串
xhr.setRequestHeader('Content-Type', 'application/json');
// 2. 准备数据并转成 JSON 字符串
const user = { username: 'xxxxxxxx', password: 'xxxxxxxx' };
const userStr = JSON.stringify(user);
// 3. 发送请求体数据
xhr.send(userStr);
