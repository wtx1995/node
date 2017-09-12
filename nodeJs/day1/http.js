// var http = require('http');

// var server = http.createServer(function(req,res){
//     console.log("服务器收到请求"+req.url);
//     res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
//     res.write("<h1>反对好色</h1>");
//     res.end("<h2>焕发看世界回复</h2>");
// }).listen(3000,"127.0.0.1");

// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
//     res.write('hello world');
//     res.end((1+2+3).toString());
// }).listen(3000);


// var http = require('http');
// var url = require('url');
// http.createServer(function(req,res){
//    var path = url.parse(req.url);
//    console.log(path);
//     res.end();
// }).listen(3000);

var http = require('http');
var url = require('url');
var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    var queryObj = url.parse(req.url,true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var sex = queryObj.sex;

    res.end('服务器收到了表单'+name+age+sex);
}).listen(3000);