class Vue {
    constructor(obj_instance) {
        this.$data = obj_instance.data;
      Observer(this.$data);
      Compile(obj_instance.el, this);
    }
}

// 数据劫持 - 监听实例里的数据
function Observer(data_instance) {
    // 递归出口
    if (!data_instance || typeof data_instance !== 'object') {
        return;
    }
    Object.keys(data_instance).forEach((key) => {
        let value = data_instance[key];
        Observer(value); //递归 - 子属性数据劫持
        Object.defineProperty(data_instance, key, {
            enumerable: true,
            configurable: true,
            get() {
                console.log(`访问了属性：${key}->值：${value}`);
                return value;
            },
            set(newValue) {
                console.log(`属性${key}的值${value}修改为->${newValue}`);
                value = newValue;
                Observer(newValue);
            },
        });
    });
}

// HTML模板解析 - 替换DOM内
function Compile(element, vm) {
  vm.$el = document.querySelector(element);
  const fragment = document.createDocumentFragment();
  let child;
  while (child = vm.$el.firstChild) {
    fragment.append(child);
  }
  fragment_compile(fragment);
  // 替换文档碎片内容
  function fragment_compile(node) {
    const pattern = /\{\{\s*(\s+)\s*\}\}/;
    if (node.nodeType === 3) {
      const result_regex = pattern.exec(node.nodeVale);
      if (result_regex) {
        const arr = result_regex[1].split('.');
        const value = arr.reduce(
          (total, current) => total[current], vm.$data
        );
        node.nodeVale = node.nodeVale.replace(pattern, value);
      }
      return
    }
    node.childNodes.forEach(child => fragment_compile(child));
  }
}