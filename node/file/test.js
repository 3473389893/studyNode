const fs = require('fs');

const filePath = 'a.json'
fs.readFile(filePath, 'utf-8', function (err, dataStr) {
  //2.1 打印失败结果
  //如果读取成功，则err的值为null
  //如何读取失败，则err的值为错误对象，dataStr的值为undefined
  console.log(err)
  console.log('------')
  //2.2打印成功的结果
  console.log(dataStr)
})

const date = new Date();
const obj = { "time": date.toLocaleString() };

fs.writeFile(filePath,JSON.stringify(obj), function (err) {
  //2.1 如果文件写入成功，则err的值等于null
  //2.2 如果文件写入失败，则err的值等于一个错误对象
  // console.log(err)

  if (err) {
    return console.log('文件写入失败' + err.message)
  } else {
    console.log('文件写入成功!')
  }
})