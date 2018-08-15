var express = require('express');
var app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "forum"
});

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/addPost', function (req, res) {
  var p = req.body;
  console.log(p);
  con.query('insert into posts set ?', p, function (err, result) {
    if (err) {
      res.send("erro sql");
      throw err;
    }
    console.error(result);
    res.send("sucesso");
  })

});

app.get('/getPosts', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  var posts = [];

  var sql = "SELECT * FROM posts;";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    for (var i = 0; i < result.length; i++) {
      var postDB = result[i];
      var post = {
        id: postDB.id,
        titulo: postDB.titulo,
        mensagem: postDB.mensagem
      };
      posts.push(post);
    }
    res.send(JSON.stringify(posts));
  });


});

app.listen(3333, function () {
  console.log('Server is listening on port 3333!');
});