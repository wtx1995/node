var express = require('express');

var app = express();

app.use(function(req,res){
        console.log(new Date());
});

app.use('/admin',function(req,res){
    res.send("你好");
    console.log(req.originalUrl); // '/admin/new'
    console.log(req.baseUrl); // '/admin'
    console.log(req.path); // '/new'
});

app.listen(3000);