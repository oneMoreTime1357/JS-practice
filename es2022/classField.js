class ButtonToggle2022 {
  // 公有变量
  color = 'green'
  // 私有变量
  #value = true;
  // 静态私有变量
  static #private_static_field = 2

  // 静态私有方法
  static #toggle(buttonDemo) {
    buttonDemo.#value = !buttonDemo.#value;
    console.log('toggle static private', buttonDemo.#value);
  }

  // 私有方法
  #privateMethod () {
    console.log('this is a private method');
  }

  publicFun () {
    console.log(this.#value);
    this.#privateMethod()
    ButtonToggle2022.#toggle(new ButtonToggle2022())
  }

  static staticVal = 333
}


const button = new ButtonToggle2022();
console.log(button.color);
// console.log(button.#value);
button.publicFun();
// console.log(ButtonToggle2022.staticVal);
