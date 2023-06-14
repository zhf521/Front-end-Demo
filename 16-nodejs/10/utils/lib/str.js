const checkUserName = (username) => {
  return username.length >= 8
}
const checkPassWord = (password) => {
  return password.length >= 6
}
module.exports = {
  checkUser:checkUserName,
  checkPwd:checkPassWord,
}
