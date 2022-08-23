// 引入 library
const express = require('express');
// express 引入的是一個 function
const app = express();
// 建立一個不易產生衝突的 port 用來測試
const port = 5001;

// 設定 view engine
app.set('view engine', 'ejs')

// 引入 db 資料庫: mysql 模組 & 連線資料
const db = require('./db')

// 引入 controller
const todoController = require('./controllers/todo')

app.get('/todos', todoController.getAll)

app.get('/todo/:id', todoController.get)

app.get('/hello', (req, res) => {
	res.render('hello')
})

// 運行這個 port，參數分別為 port 和要執行的 function
app.listen(port, () => {
	db.connect()
	console.log(`Example app listening at http://localhost:${port}`)
})