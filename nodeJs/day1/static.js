var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
http.createServer(function(req,res){
    //得到用户的路径
    var pathname = url.parse(req.url).pathname;
    if(pathname=='/'){
        pathname = "index.html";
    }
    var extname = path.extname(pathname);
    //真的读取这个文件
    fs.readFile("./static/"+pathname,function(err,data){
        var mine = getMine(extname);
        res.writeHead(200,{"Content-type":mine+";charset=utf-8"});
        if(err){
            fs.readFile("./static/404.html",function(err,data){
                if(err){throw err}
                else{
                    res.writeHead(404,{"Content-type":"text/html;charset=utf-8"})
                    res.end(data);
                }
            });
            return;
        };
        
        res.end(data);
    });
}).listen(3000);

function getMine(extname){
    switch(extname){
        case ".html":
            return "text/html";
            break;
        case ".jpg":
            return "image/jpg";
            break;
        case ".css":
            return "text/css";
            break;      
    }
}