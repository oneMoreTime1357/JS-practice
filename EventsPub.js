//事件发布订阅
class Events {
  constructor () {
    // 缓存事件
    this.caches = {}
  }

  on (eventName, fn) {
    this.caches[eventName] = this.caches[eventName] || []
    this.caches[eventName].push(fn)
  }

  emit (eventName, data) {
    if (this.caches[eventName]) {
      this.caches[eventName].forEach(fn => fn(data))
    }
  }

  off (eventName, fn) {
    if (this.caches[eventName]) {
      const newCaches = fn ? this.caches[eventName].filter(e => e !== fn) : []
      this.caches[eventName] = newCaches
    }
  }

  // 订阅一次的事件，使用就销毁
  once (eventName, fn) {
    let _this = this
    function on () {
      _this.off(eventName, fn)
      fn.apply(_this, arguments)
    }

    this.on(eventName, on)
  }
}