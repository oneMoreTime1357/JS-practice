/**
 * 模拟实现instanceof 原理
 * 首先明白instanceof的作用，它主要用于判断一个实例是否是父类型或者祖先类型的实例
 */

// test function instanceof 
let person = function () {
}
let programmer = function () {
}
programmer.prototype = new person()
let nicole = new programmer()
console.log(nicole instanceof person) // true
console.log(nicole instanceof programmer) // true

// 实现一个fake instanceof

function instanceofFake (leftVal, rightVal) {
  let rightProto = rightVal.prototype // 获取原型
  leftVal = leftVal.__proto__ // 获取实例的构造函数的原型

  while(true) {
    if (leftVal === null) {
      return false
    }

    if (leftVal === rightProto) {
      return true
    }
    leftVal = leftVal.__proto__
  }
}

// test
console.log('fake instanceof:', instanceofFake(nicole, person))
console.log('fake instanceof:', instanceofFake(nicole, programmer))