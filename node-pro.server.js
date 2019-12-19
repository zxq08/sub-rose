var express = require('express');
var mysql = require('mysql');
/*var config = require('./config/index');*/
/*var cors = require('cors');*/

/*var port = process.env.PORT || config.build.port;*/
var port = 9000

var app = express();

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
apiRoutes.post('/login', function (req, res) {
  let params = request.body;
　 let username = params.username;
　 let password = params.password;
  let sql = `SELECT * FROM user WHERE username = ${username}`
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      resultData = result[0]
      if (resultData.password == password) {
        return true
      } else {
        return false
      }
    }
  })
})
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
