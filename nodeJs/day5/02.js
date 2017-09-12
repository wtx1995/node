var express = require('express');
var app = express();
var db = require('./model/db.js');

app.get('/',function(req,res){
    //三个参数，往哪个集合中增加，增加什么，增加之后做什么
    db.insertOne('student',{"name":"小红"},function(err,result){
        if(err){
            console.log('插入失败');
            return;
        }
        res.send('插入成功');
    });
})

app.get('/du',function(req,res){
    var page = parseInt(req.query.page);
    //查找4个参数，在哪个集合查，查什么，分页设置，查完之后做什么
    db.find('student',{},function(err,result){
       if(err){
           console.log(err);
       }
        res.send(result);
    })
})

app.get('/shan',function(req,res){
    var _id = req.query.id;
    db.deleteMany('student',{'name':_id},function(err,result){
        if(err){
            console.log(err);
        }
        res.send(result);
    })
})

app.get('/xiugai',function(req,res){
    db.updateMany(
        'student',
        {
            'name':'小红'
        },
        {
        $set:{'name':'小绿'}
        },
    function(err,result){
        if(err){
            console.log(err);
        }
        res.send(result);
    })
})

app.listen(3000);