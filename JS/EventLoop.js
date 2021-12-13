// process.nextTick(function A() {
//   console.log(1);
//   process.nextTick(function B(){console.log(2);});
// });

// new Promise(resolve => {
//   console.log('promise 1')
//   resolve('promise then')
// }).then(res => {
//   console.log(res)
// })

// setTimeout(function timeout() {
//   console.log('TIMEOUT FIRED');
// }, 0)

// ---- 下面这种执行顺序打印出来的结果不确定

// setImmediate(function A() {
//   console.log(1);
//   setImmediate(function B(){console.log(2);});
// });

// setTimeout(function timeout() {
//   console.log('TIMEOUT FIRED');
// }, 0);

// ----- 下面这种打印的结果
// setImmediate(function (){
//   setImmediate(function A() {
//     console.log(1);
//     setImmediate(function B(){console.log(2);});
//   });

//   setTimeout(function timeout() {
//     console.log('TIMEOUT FIRED');
//   }, 0);
// });


require('fs').readFile(__dirname, _ => {
  setTimeout(_ => console.log('timeout'))
  setImmediate(function A() {
    console.log('immediate');
    setImmediate(function B(){console.log(2);});
  });
})

