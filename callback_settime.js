function syncCallback(callback) {
  console.log("开始同步操作");
  callback(); // 同步调用
  console.log("同步操作结束");
}

syncCallback(() => {
  console.log("这是回调函数");
});

function asyncCallback(callback) {
  console.log("开始异步操作");
  setTimeout(() => {
    callback(); // 异步调用
  }, 0);
  console.log("异步操作初始化完成");
}

asyncCallback(() => {
  console.log("这是回调函数");
});
