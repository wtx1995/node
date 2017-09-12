var ejs = require('ejs');
var fs = require('fs');
var http = require('http');
http.createServer(function(req,res){
     if(req.url == "/favicon.ico"){
        return;
    }
    
    fs.readFile("./views/index.ejs",function(err,date){
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        var template = date.toString();;
        var dictionary = {a:6,news:['发送记录覅',"菲利克斯接待来访",'dfskj']};
        var html = ejs.render(template,dictionary);
        res.end(html);
    })
}).listen(3000);
