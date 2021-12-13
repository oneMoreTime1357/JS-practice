class ButtonToggle {
  constructor(){
    // 公共属性
    this.color = 'green'
    // 定义私有属性
    this._value = true
  }

  toggle() {
    this.value = !this.value
  }

  static startFun () {
    console.log('static 方法');
  }
}

const button = new ButtonToggle();
console.log(button.color);

// 私有变量也可以访问
button._value = false;
console.log(button._value);

// 访问静态方法
ButtonToggle.startFun();