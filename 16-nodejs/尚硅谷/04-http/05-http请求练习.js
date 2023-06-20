const http = require('http')
const server = http.createServer((request, response) => {
  let { method } = request
  let { pathname } = new URL(request.url, 'http://127,0.0.1')
  if (method === 'GET' && pathname === '/login') {
    response.end('登录页面')
  } else if (method === 'GET' && pathname === '/reg') {
    response.end('注册页面')
  }
  response.end('practice')
})
server.listen(9000, () => {
  console.log('服务已启动')
})
