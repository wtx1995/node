var express = require("express");
var app = express();

app.get('/',function(req,res){
    res.send("你好")
});

app.get('/haha',function(req,res){
    res.send("你好,我是哈哈哈哈")
});

app.get(/\/student\/([\d]{10})$/,function(req,res){
    res.send('学生信息,学号'+req.params[0]);
});

app.get("/teacher/:gonghao",function(req,res){
    let a = /^\d{6}$/;
    if(a.test(req.params.gonghao)){
        res.send("老师信息，工号"+req.params.gonghao);
    }else{
        res.send('工号不存在');
    }
})

// app.get(/\/teacher\/([\d]{6})$/,function(req,res){
//     res.send("老师信息，工号"+req.params[0]);
// })

app.listen(3000);