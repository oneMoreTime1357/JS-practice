// find_number.js
// 在字符串中找到数字并返回
/**
 * @param {string} str 待检索的字符串
 * @returns {number[]}
 */
function findNum(str) {
  // todo 代码实现
  let reg = /[0-9]+/g
  return str.match(reg).map(item => +item)
}

// export default findNum;
console.log("========数字提取=========");
console.log(findNum("asfs123fasde;lkjjiwdf2;kj;;l;io55fsa")); // [123,2,55]