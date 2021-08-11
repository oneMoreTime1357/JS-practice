/**
 * 手写一个promise all的Polly fill
 * 首先promise.all的特点：
 * 1、传入的是一个promise数组，返回值也是promise，是一个数组结果
 * 2、但参数数组中不一定都是promise，返回的顺序和传入的顺序是一样的
 * 3、如果有一个promise执行失败，则所有的都reject，其他的promise还会执行，但没有返回结果
 */

function promiseAllFake (promiseArr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      return reject(new Error('params is not Array'))
    }

    const len = promiseArr.length
    const result = []
    let counter = 0
    for (let index = 0; index < len; index++) {
      Promise.resolve(promiseArr[index]).then(res => {
        result[index] = res
        counter++
        if (counter === len) {
          resolve(result)
        }
      })
    }
  })
}

const p1 = new Promise((res, reject) => {
  setTimeout(() => {
    res(1)
  }, 1000)
})

const p2 = new Promise((res, reject) => {
  setTimeout(() => {
    res(2)
  }, 2000)
})

const p3 = new Promise((res, reject) => {
  setTimeout(() => {
    res(3)
  }, 3000)
})

promiseAllFake([p1, p2, p3]).then(res => {
  console.log(res) // 打印 1, 2, 3
}).catch((e) => {
  console.log(e)
})
