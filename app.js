//module import
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;

app.set('views', path.join (__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('./public'));

//var mainRouter = require('./router/main.js');

//app.use(mainRouter);

app.listen(port, ()=>{
    console.log('서버 시작..');
});
    app.get('/', (req, res)=>{
        res.send("<h1>Hello World!!!</h1>");
    });