const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const message = ['信息1', '信息2', '信息3', '信息4']
const types = ['info', 'success', 'error']
button.addEventListener('click', () => {
  createNotification()
})
function createNotification(message = null, type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())
  notif.innerText=message?message:getRandomMessage()
  toasts.appendChild(notif)
}
function getRandomType() {
  return types[Math.floor(Math.random()*types.length)]
}
function getRandomMessage() {
  return message[Math.floor(Math.random() * message.length)]
}