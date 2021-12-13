class ButtonDemo {
  // 公有变量
  color = 'green';
  // 私有变量
  #value = true;
  // 静态私有变量
  static #private_static_field = 2

  // 私有方法
  #privateMethod () {
    console.log('this is a private method');
  }

  // 静态私有方法
  static #toggle() {
    console.log('hello toggle');
  }

  publicFunc () {
    this.#privateMethod();
    console.log(ButtonDemo.#private_static_field, this.#value); 
    ButtonDemo.#toggle();
  }
}

const btn = new ButtonDemo()
btn.publicFunc()