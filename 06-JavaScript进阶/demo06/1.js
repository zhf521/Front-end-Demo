function A1() {
  a1()
  console.log('A1')
}
function A2() {
  console.log('A2')
}
function a1() {
  console.log('a1')
}
//导出暴露的方法
export default { A1, A2 }
