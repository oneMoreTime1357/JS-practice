// remove_dup.js

// 实现数组去重
/**
 * @param {number[]} arr 待去重的数组
 * @returns number[]
 */
function removeDup(arr) {
  // todo 代码实现
  let set = new Set(arr)
  return [...set]
}

// export default removeDup;


console.log("========数组去重=========");
console.log(removeDup([1, 2, 3, 4, 2, 8, 1, 5])); // [1,2,3,4,8,5]