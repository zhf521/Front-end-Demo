const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

function getDate() {
  header.innerHTML = '<img src="https://zhf521.github.io/mynotes/logo.png">'
  title.innerHTML = '我的自传'
  excerpt.innerHTML = '我是一个喜欢吃饭的人，太酷啦！'
  profile_img.innerHTML =
    '<img src="https://zhf521.github.io/mynotes/logo.png">'
  name.innerHTML = '茕茕'
  date.innerHTML = '2023.6.8'
  animated_bgs.forEach((bg) => {
    bg.classList.remove('animated-bg')
  })
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
getDate()
