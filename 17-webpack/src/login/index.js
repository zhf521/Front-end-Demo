import { checkPhone,checkCode } from '../utils/check'

// document.querySelector('.btn').addEventListener('click', () => {
//   const phone = document.querySelector('.login-form [name=mobile]').value
//   const code = document.querySelector('.login-form [name=code]').value
//   if (!checkPhone(phone)) {
//     console.log('手机号长度必须是11位')
//     return
//   }
//   if (!checkCode(code)) {
//     console.log('验证码长度必须是6位')
//     return
//   }
//   console.log('登录')
// })

import './index.css'
import './index.less'

import imgObj from './assets/logo.png'
const theImg = document.createElement('img')
theImg.src = imgObj
document.querySelector('.login-wrap').appendChild(theImg)

import myAxios from '../utils/request.js'
import { myAlert } from '../utils/alert'

console.log('hahaha')