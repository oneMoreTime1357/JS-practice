/**
 * 一个扁平数组结构的数据转换成tree结构
 * let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
  ]
  何为树结构，数组中的id和pid又是什么关系。
  数组中的数据pid是parent id的意思，parent id指的就是id，转换成树结构应该是
 */

let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4}
]

// ----使用递归解决这个问题，每获取到当前数据都会进行下一次循环遍历
function getChild (data, res, pid) {
  for (const item of data) {
    // 遍历判断当前pid，是否等于父节点ID
    if (item.pid === pid) {
      const newItem = {...item, children: []}
      res.push(newItem)
      getChild(data, newItem.children, item.id)
    }
  }
}
// 递归解决很耗费性能
function arrayToTree (data, pid) {
  let res = []
  getChild(data, res, pid)
  return res
}

// ---------第二种解法 使用map对象来存储数据 对象引用-------
function arrayToTreeMap (data) {
  const res = []
  const itemMap = {}

  for (const item of data) {
    const id = item.id
    const pid = item.pid

    if (!itemMap[id]) {
      itemMap[id] = {
        children: []
      }
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id].children
    }

    const treeItem = itemMap[id]

    if (pid === 0) {
      res.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: []
        }
      }
      itemMap[pid].children.push(treeItem)
    }
    console.log(itemMap)
  }

  return res
}

let result = arrayToTree(arr, 0)
console.log(JSON.stringify(result))
let res = arrayToTreeMap(arr)
console.log(JSON.stringify(res))