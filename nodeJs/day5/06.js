var express = require('express');
var app = express();
var db = require('./model/db.js');
var session=require('express-session');

app.set('view engine','ejs');

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
}))

app.get('/',function(req,res){
    if(req.session.login){
        res.send('欢迎用户'+req.session.username+'登陆成功');
    }else{
        res.send('登录失败');
    }
})

app.get('/login',function(req,res){
    res.render('login');
})

app.get('/checklogin',function(req,res){
    var username = req.query.username;
    var password = req.query.password;
    //根据用户填写的姓名，去数据库里面找这个文档，读取密码。
    db.find('user',{'username':username},function(err,result){
        if(result.length==0){
            res.send('没有这个用户');
            return;
        }
        if(result[0].password==password){
            req.session.login=true;
            req.session.username=username;
            res.send('成功登陆，你是用户'+username);
        }else{
            res.send('密码错误');
        }
    });
})
app.listen(3000);