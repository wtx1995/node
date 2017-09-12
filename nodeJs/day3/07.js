var express = require('express');
var app = express();

app.get('/admin/login',function(req,res){
    console.log('1');
    res.send('管理员登录');
});

app.get('/:username/:id',function(req,res){
    console.log(2);
    res.send('用户信息'+req.params.username);
})

app.listen(3000);