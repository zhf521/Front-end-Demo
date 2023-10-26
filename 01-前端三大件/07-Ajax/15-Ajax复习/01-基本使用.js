// IE9及以上
const xhr = new XMLHttpRequest();
// IE9以下
// const xhr = new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('请求方法', '请求url网址', 是否异步);
xhr.onreadystatechange = function () {
    // 判断异步对象的状态
    if (xhr.readyState === 4) {
        // 判断交互是否成功
        if (xhr.status === 200) {
            //获取服务器响应数据
            let res = xhr.responseText;
            // 解析数据
            res = JSON.parse(res);
        }
    }
};
xhr.send();
