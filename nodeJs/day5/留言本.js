var express = require('express');
var app = express();
var db = require('./model/db.js');
var formidable = require('formidable');
var objectId = require('mongodb').ObjectID;

//设置模板引擎
app.set("view engine",'ejs');

//静态
app.use(express.static('./public'));
//显示留言列表
app.get('/',function(req,res){
    db.getAllCount('liuyanben',function(count){
        res.render('index',{
            'pageamount':Math.ceil(count/4)
        });
    })
});

app.get('/du',function(req,res,next){
    var page = parseInt(req.query.page);
    db.find('liuyanben',{},{'sort':{'shijian':-1},'pageamount':4,'page':page},function(err,result){
        res.json({'result':result});
    });
})
//得到留言总数量
app.get('/a',function(req,res,next){
    db.getAllCount('liuyanben',function(count){
        res.send(count.toString())
    });
})

//处理留言
app.post('/tijiao',function(req,res,next){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
        //写入数据库
        db.insertOne('liuyanben',{
            'xingming':fields.xingming,
            'liuyan':fields.liuyan,
            'shijian':new Date()
        },function(err,result){
            if(err){
                res.json('-1');
                return;
            }
            res.json('1');
        })
        // console.log(fields.xingming+fields.liuyan)
    })
})

//删除留言
app.get('/delete',function(req,res,next){
    //得到参数
    var id = req.query.id;
    db.deleteMany('liuyanben',{'_id':objectId(id)},function(err,result){
        if(err){
            res.send('删除失败');
        }
        res.redirect('/');
    })
})

app.listen(3000);