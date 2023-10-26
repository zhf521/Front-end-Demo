/**
 * 目标：使用XHR携带查询参数，展示某个省下属的城市列表
 */
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://hmajax.itheima.net/api/city?pname=辽宁省');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let res = xhr.responseText;
            console.log(res);
        }
    }
};
xhr.send();
