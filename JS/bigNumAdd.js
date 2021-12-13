/**
 * 两个大数相加，不使用bigInt
 * 先将俩数字转换成字符串，对字符串合并相加
 * @param {*} a 
 * @param {*} b 
 */
function bigNumAdd (a, b) {
  let maxLen = Math.max(a.length, b.length)
  a = a.padStart(maxLen, 0)
  b = b.padStart(maxLen, 0)

  let t = 0, f = 0
  let sum = ''
  for (let i = maxLen - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f
    f = Math.floor(t / 10)
    sum = t % 10 + sum
  }

  if (f === 1) {
    sum = '1' + sum
  }

  return sum
}

let a = "9007199254740991";
let b = "1234567899999999999";
let res = bigNumAdd(a, b)
console.log(res)