/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const creator = '老茕茕'
function getBooksList() {
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    params: {
      creator,
    },
  }).then((result) => {
    console.log(result)
    const bookList = result.data.data
    console.log(bookList)
    const htmlStr = bookList
      .map((item, index) => {
        return `
      <tr>
      <td>${index + 1}</td>
      <td>${item.bookname}</td>
      <td>${item.author}</td>
      <td>${item.publisher}</td>
      <td data-id=${item.id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
      </tr>
      `
      })
      .join('')
    // console.log(htmlStr)
    document.querySelector('.list').innerHTML = htmlStr
  })
}
getBooksList()

const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom)
document.querySelector('.add-btn').addEventListener('click', () => {
  const addForm = document.querySelector('.add-form')
  const bookObj = serialize(addForm, { hash: true, empty: true })
  console.log(bookObj)
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    method: 'POST',
    data: {
      ...bookObj,
      creator,
    },
  }).then((result) => {
    console.log(result)
    getBooksList()
    addForm.reset()
    addModal.hide()
  })
})

document.querySelector('.list').addEventListener('click', (e) => {
  console.log(e.target)
  if (e.target.classList.contains('del')) {
    const theId = e.target.parentNode.dataset.id
    console.log(theId)
    axios({
      url: `http://hmajax.itheima.net/api/books/${theId}`,
      method: 'DELETE',
    }).then((result) => {
      console.log(result)
      getBooksList()
    })
  }
})

const editDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editDom)
document.querySelector('.list').addEventListener('click', (e) => {
  if (e.target.classList.contains('edit')) {
    const theId = e.target.parentNode.dataset.id
    axios({
      url: `http://hmajax.itheima.net/api/books/${theId}`,
    }).then((result) => {
      // console.log(result)
      const bookObj = result.data.data
      document.querySelector('.edit-form .bookname').value = bookObj.bookname
      document.querySelector('.edit-form .author').value = bookObj.author
      document.querySelector('.edit-form .publisher').value = bookObj.publisher
      document.querySelector('.edit-form .id').value = bookObj.id
    })
    editModal.show()
  }
})
document.querySelector('.edit-btn').addEventListener('click', () => {
  const editForm = document.querySelector('.edit-form')
  const { id, bookname, author, publisher } = serialize(editForm, {
    hash: true,
    empty: true,
  })
  console.log(id)
  axios({
    url: `http://hmajax.itheima.net/api/books/${id}`,
    method: 'PUT',
    data: {
      bookname,
      author,
      publisher,
      creator,
    },
  }).then(() => {
    getBooksList()
    editModal.hide()
  })
})
