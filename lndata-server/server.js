// 利用 epxress 來建立一個 express application
const express = require('express');
const app = express();

const path = require('path');
require('dotenv').config();


// 使用第三方開發的中間件 cors，允許跨域
const cors = require('cors');
// 這樣全開，但不包含跨源讀寫 cookie
// app.use(cors());
// origin: *
// 如果想要跨源讀寫 cookie
app.use(
  cors({
    // 為了要讓 browser 在 CORS 的情況下，還是幫我們縙 cookie
    // 這邊需要把 credentials 設定成 true，而且 origin 不可以是 *
    // 不然就太恐怖，誰都可以跨源讀寫 cookie
    origin: ['http://localhost:3000', 'http://localhost:3002'],
    credentials: true,
  })
);

// express.urlencoded 要讓 express 認得 req 裡 body 裡面的資料
// extended: false --> querystring
// extended: true --> qs
app.use(express.urlencoded({ extended: true }));
// 要讓 express 認得 req 裡 json
app.use(express.json());

app.get('/', (req, res) => {
    // console.log(req.session);
    res.send('home');
});

const ImportRouter = require('./importData.js');
app.use('/importdata', ImportRouter);



// 404
app.use((req, res, next) => {
    // console.log('所有路由的後面 ==> 404', req.path);
    res.status(404).send('Not Found');
  });

// app.listen(3001, () => {
//   console.log('Server start at 3001');
// });
//將 express 放進 http 中開啟 Server 的 3001 port ，正確開啟後會在 console 中印出訊息
const server = require('http')
  .Server(app)
  .listen(3001, () => {
    console.log('Server start at 3001');
  });