var express = require('express');
var fs = require('fs');
var app = express();

app.use(haha);
app.listen(3000);

function haha(req,res,next){
    var filePath = req.originalUrl;
    //根据当前的网址，读取public文件夹中的文件
    //如果有这个文件，那么渲染这个文件
    //如果没有这个文件，那么next（）；
    fs.readFile("./public/"+filePath,function(err,data){
        if(err){
            next();
            return;
        };
        res.send(data.toString());
    });
}