// 1. 定义myAxios函数，接收配置对象，返回Promise对象
function myAxios(config) {
    return new Promise((resolve, reject) => {
        // 2. 发起XHR请求，默认请求方法为GET
        const xhr = new XMLHttpRequest();
        xhr.open(config.method || 'GET', config.url);
        xhr.onreadystatechange = () => {
            // 3. 调用成功/失败的处理程序
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(new Error(xhr.response));
                }
            }
        };
        xhr.send();
    });
}
// 4. 使用myAxios函数
myAxios({
    url: '目标资源地址',
})
    .then((result) => {})
    .catch((error) => {});
