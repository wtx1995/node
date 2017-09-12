var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
   if(req.url=="/fang"){
       fs.readFile("./text.html",function(err,data){
           if(err){
               console.log(err);
           }else{
               res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
               res.end(data);
           }
       })
   }else if(req.url=="/0.jpg"){
       fs.readFile("./0.jpg",function(err,data){
             if(err){
               console.log(err);
           }else{
               res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
               res.end(data);
           }
       })
   }else{
        res.writeHead(404,{"Content-type":"text/html;charset=utf-8"});
        res.end("没有页面");
   }
}).listen(3000,'127.0.0.1');