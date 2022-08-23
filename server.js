// node.js 內建 http 相關 module
const http = require('http')
// createServer() 要傳入的參數是 function
const server = http.createServer(handler)

// 兩個參數分別是 request 和 response，這裡使用命名慣例寫法
function handler(req, res) {
	console.log(req.url)  // 印出 req 網址
	if (req.url === '/hello') {
		// 參數分別是 request 的 status code 和內容格式，告訴瀏覽器如何解析網頁
		res.writeHead(200, {            // 200: 請求成功
			'Content-Type': 'text/html'
		})
		res.write('<h1>hello!</h1>')    // 也可以加上 HTML 標籤
	} else if (req.url === '/bye') {
		res.write('<h2>bye!</h2>>')
	} else {
		res.write('Invalid url')
	}
	res.end()   // 結束這個 response
}

// 常見為 80 port，測試時使用 5001 port 就不易發生衝突
server.listen(5001)