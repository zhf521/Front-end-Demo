class MVVM{
  constructor(el, data) {
    this.el = document.querySelector(el);
    this._data = data;
    this.init();
  }
  init() {
    this.initData();
    this.initDom();
  }
  initDom() {
    this.bindInput(this.el);
  }
  initData() {
    const _this = this;
    this.data = {};
    for (let key in this._data) {
      Object.defineProperty(this.data, key, {
        get() {
          console.log('获取数据：',key,_this._data[key]);
              return _this._data[key];
          },
        set(newValue) {
            console.log('设置数据：',key,newValue);
              _this._data[key] = newValue;
          },
      });
    }
    this.data['name'] = 'zhf';
  }

  bindInput(el) {
    const _allInput = el.querySelectorAll('input');
    _allInput.forEach(input => {
      const _vModel = input.getAttribute('v-model');
      if (_vModel) {
        input.addEventListener('keyup', this.handleInput.bind(this, _vModel, input), false);
      }
    })
  }
  handleInput(key, input) {
    const _value = input.value;
    this.data[key] = _value;
    
  }
} 

/*
1. 数据 -> 响应式的数据 Object.defineProperty Proxy
2. input -> input/keyup -> 事件处理函数的绑定 -> 改变数据
3. 相关DOM -> 数据 => 绑定在一起  操作数据的某个属性 -> 对应DOM就改变
*/