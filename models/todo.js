// 引入 db，也就是 connection
const db = require('../db')

// 建立一個 todoModel 物件，裡面放存取資料的方法（function）
const todoModel = {
	getAll: (cb) => {
		db.query('select * from todos',(err,result) => {
			if (err) return cb(err);

			// cb: 第一個參數為是否有錯誤，沒有的話就是 null，第二個才是結果
			cb(null, result)
		})
	},

	get: (id,cb) => {
		db.query(
			'SELECT * FROM todos WHERE id = ?', [id], (err, results) => {
				if (err) return cb(err);
				cb(null, results)
			});
	}
}

module.exports = todoModel