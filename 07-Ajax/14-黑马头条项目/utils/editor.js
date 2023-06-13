// 富文本编辑器
// 创建编辑器函数，创建工具栏函数
const { createEditor, createToolbar } = window.wangEditor

//编辑器配置对象
const editorConfig = {
  placeholder: '发布文章内容...',
  onChange(editor) {
    const html = editor.getHtml()
    console.log('editor content', html)
    // 也可以同步到 <textarea>
    document.querySelector('.publish-content').value = html
  }
}

const editor = createEditor({
  selector: '#editor-container',
  //默认内容
  html: '<p><br></p>',
  config: editorConfig,
  mode: 'default', // or 'simple'
})

const toolbarConfig = {}

const toolbar = createToolbar({
  editor,
  selector: '#toolbar-container',
  config: toolbarConfig,
  mode: 'default', // or 'simple'
})