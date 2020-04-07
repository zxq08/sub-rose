var express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const sercet = "love_sasa";
/*var config = require('./config/index');*/
/*var cors = require('cors');*/

/*var port = process.env.PORT || config.build.port;*/
var port = 9000

var app = express();

app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据
app.all('*',function(req,res,next){  
  let origin=req.headers.origin;
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  next();
})

// 连接数据库
var db = mysql.createConnection({
  host: 'localhost',
  user: 'zxq',
  password: 'zxq0825',
  database: "nodemysql"
});
db.connect((err) => {
  if(err) throw err;
  console.log('connect success zxqDB!')
})

/*app.use(cors());*/

var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = 'index.html';
  next();
});

app.use(router);
/*
var index = require('./static/mock/index.json');
var city = require('./static/mock/city.json');
var detail = require('./static/mock/detail.json');*/

var apiRoutes = express.Router();

/*apiRoutes.get('/index', function (req, res) {
  res.json({
    errno: 0,
    data: index
  });
});
apiRoutes.get('/city', function (req, res) {
  res.json({
    errno: 0,
    data: city
  });
});
*/
// 登录验证
app.post('/login', bodyParser.json(), function (req, res) {
  let params = req.body;
　let username = params.username;
　let password = params.password;
  let sql = `SELECT * FROM user WHERE username = '${username}'`
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      resultData = result[0]
      if (resultData.password === password) {
        console.log("success!")
        var data = '';
        req.on('data', function (chunk) {
          data += chunk;
        })
        req.on('end', function () {
          console.log(data)
        })
        const token = jwt.sign({
          username,
          password,
          'time': Date.now(),
        },sercet,{expiresIn:60*60*24*7});
        res.json({
          code: 0,
          msg: 'success',
          data: token
        });
      } else {
        return false
      }
    }
  })
})
// app.get('/login', function (req, res) {
//   let sql = "SELECT * from user";
//   db.query(sql, (err, result) => {
//     if(err) throw err;
//     else {
//       res.json(result)
//     }
//   })
// })
/* //post方法获取请求参数
apiRoutes.post('/city', function (req, res) {
  var data = '';
  req.on('data', function (chunk) {
    data += chunk;
  })
  req.on('end', function () {
    console.log(data)
  })
  res.json({
    errno: 0,
    data: city
  });
});*/
/*apiRoutes.get('/detail', function (req, res) {
  res.json({
    errno: 0,
    data: detail
  });
});*/

app.use('/api', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
});
