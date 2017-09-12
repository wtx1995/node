var http = require('http');
var fs = require('fs');
var url = require("url");
var path = require('path');

http.createServer(function(req,res){
      if(req.url == "/favicon.ico"){
        return;
    }
    var pathname = url.parse(req.url).pathname;
    if(pathname.indexOf('.')==-1){
        pathname += "/index.html";
    }
    var fileURL ="./"+ path.normalize('./static/'+pathname);
    //得到拓展名
    var extname = path.extname(pathname);
    //把文件读出来
    fs.readFile(fileURL,function(err,data){
        if(err){
            fs.readFile("./static/404.html",function(err,data){
                res.writeHead(404,{"Content-type":"text/html;charset=utf-8"});
                res.end(data);
            });
            return;
        }
        var mine  =getMine(extname);
        res.writeHead(200,{"Content-type":mine});
        res.end(data);
    });
}).listen(3000);

function getMine(extname){
   //读mime.js文件，得到json，根据extname key返回对应的value
   //读取文件
  var data = fs.readFileSync("./static/json/mime.json")
  var mimeJSON = JSON.parse(data);
  return mimeJSON[extname];
}
    

