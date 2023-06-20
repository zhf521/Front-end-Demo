const http = require('http')
const server = http.createServer((request, response) => {
  // response.statusCode=200
  // response.statusMessage='i love you'
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.write('love')
  response.end('你好') //设置响应体
})
server.listen(9000, () => {
  console.log('服务已经启动...')
})
