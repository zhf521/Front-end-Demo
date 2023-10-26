function myAxios(config) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        if (config.params) {
            const paramsObj = new URLSearchParams(config.params);
            const queryString = paramsObj.toString();
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
        // 1. 判断有data选项，携带请求体
        if (config.data) {
            // 2. 转换数据类型，在send中发送
            const jsonStr = JSON.stringify(config.data);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(jsonStr);
        } else {
            // 如果没有请求体数据，正常的发起请求
            xhr.send();
        }
    });
}
