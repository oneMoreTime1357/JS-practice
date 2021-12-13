class C {
  #brand;

  #method() {}

  get #getter() {}

  static isC(obj) {
    return #brand in obj && #method in obj && #getter in obj;
  }
}

// 应用示例
function createClass() {
  // 工厂函数创建class
  return class {
    #name;
    constructor(name) {
      this.#name = name;
    }
    static getName(obj) {
      // return obj.#name;
      if (#name in obj) {
        return obj.#name;
      }
      return undefined
    }
  };
}

const Class1 = createClass()
const Class2 = createClass()

const n = Class1.getName(new Class2('aa'))
console.log(n);