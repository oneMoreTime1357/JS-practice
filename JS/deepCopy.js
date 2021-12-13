/**
 * 深拷贝
 */

function deepCopy (obj) {
  const res = Array.isArray(obj) ? [] : {}

  for (const key in obj) {
    if (typeof res === 'object') {
      deepCopy(obj[key])
    } else {
      res[key] = obj[key]
    }
  }
  return res
}

// 解决循环引用的问题
function deepCloneWeak (obj, hash = new WeakMap()) {
  
}

var obj = {
	a: 1,
  b: 2
}
obj.e = obj
console.log(obj) // 不会报错

const objCopy = deepCopy(obj)
console.log(objCopy) // 报错栈溢出

