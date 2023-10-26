function myAxios(config) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // 1. 判断有params选项，携带查询参数
        if (config.params) {
            // 2. 使用URLSearchParams转换，并携带到url上
            const paramsObj = new URLSearchParams(config.params);
            const queryString = paramsObj.toString();
            // 把查询参数字符串，拼接在url？后面
            config.url += `?${queryString}`;
        }

        xhr.open(config.method || 'GET', config.url);
        xhr.onreadystatechange = () => {
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
