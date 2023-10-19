const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

mongoose.connection.on('open', () => {
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price:Number,
  })
  let BookModel = mongoose.model('books', BookSchema)
  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price:19.9
  }).then(data => {
    console.log(data)
    mongoose.disconnect()
  }).catch(err => {
    console.log(err)
  })
  console.log('连接成功')
})
mongoose.connection.on('error', () => {
   console.log('连接失败')
})
mongoose.connection.on('close', () => {
  console.log('连接关闭')
})