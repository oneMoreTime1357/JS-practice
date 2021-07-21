/**
 * 模拟promise，实现一个简单的promise
 */

// promise的三个状态
const PENDING = 'PENDING'
const FULLFILLED = 'FULLFILLED'
const REJECTED = 'REJECTED'

class PromiseFake {
  // promise 传入一个函数，两个回调函数resolve，reject
  constructor (executor) {
    // promise的状态，默认是pending状态
    this.status = PENDING
    // 存放成功状态的值，默认为undefined
    this.value = undefined
    // 存放失败状态的值，默认为undefined
    this.reason = undefined
    // 存放成功的回调
    this.onResolvedCallbacks = []
    // 存放失败的回调
    this.onRejectCallbacks = []

    // 调用此方法就是成功
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULLFILLED
        this.value = value
        // 依次对应函数执行
        this.onRejectCallbacks.forEach(fn => fn())
      }
    }

    let reject = (reason) => {
      // 状态为pending时才可以更新状态，方式executor调用两次
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        // 依次对应函数执行
        this.onRejectCallbacks.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error)
    }
  }

  then(onFullfilled, onRejected) {
    if (this.status === FULLFILLED) {
      onFullfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status === PENDING) {
      // 如果是pending状态，现在也不知道会是成功还是失败，所以要先把函数存放起来，等状态确定了在执行
      this.onResolvedCallbacks.push(() => {
        onFullfilled(this.value)
      })

      this.onRejectCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  }
}

// test
const p = new PromiseFake((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
}).then((data) => {
  console.log(success, data)
}, (err) => {
  console.log('fi=aid', err)
})