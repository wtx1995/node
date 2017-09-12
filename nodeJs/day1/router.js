// var http = require('http');

// var server = http.createServer(function(req,res){
//     var userurl = req.url;
//     res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
//     // console.log(userurl)
//     if(userurl.substr(0,9)=="/student/"){
//         var studentid = userurl.substr(9);
//         console.log(studentid);
//         if(/^\d{10}$/.test(studentid)){
//             res.end("您要查询的学生信息，id为"+studentid);
//         }else{
//             res.end("学生学号位数不对");
//         }
//     }else if(userurl.substr(0,9)=="/teacher/"){
//         var teacherid = userurl.substr(9);
//         if(/^\d{6}$/.test(teacherid)){
//             res.end("您要查询的老师信息，id为"+teacherid);
//         }else{
//             res.end("老师写好位数不对");
//         }
//     }else{
//         res.end("请检查url");
//     }
//     res.end();
// }).listen(3000);

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return;
    };
    var userid = parseInt(Math.random()*89999)+10000;
    console.log("欢迎"+userid);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    fs.readFile('./1.txt',function(err,data){
        if(err){
            throw err;
        }else{
            res.end(data);
            console.log(userid+"读取完毕");
        }
    });
}).listen(3000);