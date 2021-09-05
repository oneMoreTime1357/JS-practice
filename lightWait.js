/**
 * 实现一个js函数，满足先开始显示红色3秒、然后显示黄色1秒，最后显示绿色2秒，进行循环；
 */

function sleep (time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

async function light () {
  console.log('red')
  await sleep(3)
  console.log('yellow')
  await sleep(1)
  console.log('green')
  await sleep(2)
  light()
}