var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
    fs = require('fs');
    sd = require('silly-datetime');
    path = require('path');

http.createServer(function(req,res){
      if(req.url == "/favicon.ico"){
        return;
    }else if(req.url == '/dopost'&&req.method.toLocaleLowerCase()=='post'){
        var form = new formidable.IncomingForm();
        //设置文件上传存放的地址
        form.uploadDir = "./uploads";
        form.parse(req,function(err,fields,files){
            if(err){throw err}
            //console.log(util.inspect({fields:fields,files:files}));
            //时间，使用了第三方模块，silly_datetime
            var ttt = sd.format(new Date(),'YYYYMMDDHHmmss');
            var ran = parseInt(Math.random()*89999+10000);
            var extname = path.extname(files.tupian.name);
            //执行改名
            var oldpath = __dirname+"/"+files.tupian.path;
            var newpath = __dirname+"/uploads/"+ttt+ran+extname;
            //改名
           fs.rename(oldpath,newpath,function(err){
               if(err){throw err}
                 res.writeHead(200,{"Content-type":"text/plain;charset=utf-8"});
                res.end("成功");
           })
           
            //所有的文本域，单选框，都在fields存放；
          
        });
    }
}).listen(3000);
    