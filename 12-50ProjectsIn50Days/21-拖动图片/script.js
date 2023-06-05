const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
  empty.addEventListener('dragover', dragover)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}

function dragStart() {
  this.className += ' hold'
}
function dragEnd() {
  this.className = 'fill'
}
function dragover(e) {
  e.preventDefault()
}
function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}
function dragLeave() {
  this.className = 'empty'
}
function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}
