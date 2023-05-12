const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
open.addEventListener('click', () => {
  return container.classList.add('show-nav')
})
close.addEventListener('click', () => {
  return container.classList.remove('show-nav')
})
