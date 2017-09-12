var express = require('express');
var cookiePareser = require('cookie-parser');
var app = express();

app.use(cookiePareser());

app.get('/',function(req,res){
    //maxAge在express中以毫秒为单位
    res.cookie('xihao','tfboys',{maxAge:900000,httpOnly:true});
    res.send('猜你喜欢'+req.cookies.a);
});

app.get('/jipiao',function(req,res){
    //得到get请求，用户查询的目的地
    var a = req.query.a;
    //记录用户的喜好
    //先读取用户的洗好，然后把新的数据push进入数组，然后设置新的cookie
    var mudidi = req.cookies.a||[];
    mudidi.push(a);
    res.cookie('a',mudidi,{maxAge:900000,httpOnly:true});
    res.send(a+'旅游攻略');
})

app.listen(3000);