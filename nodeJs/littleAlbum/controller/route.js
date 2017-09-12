var file = require('../models/file.js');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
var sd = require('silly-datetime');


exports.showIndex = function(req,res){
    res.render('index',{
        "albums":file.getAllAlbums()
    });
}
exports.showAlbum = function(req,res,next){
    //遍历相册中的所有图片
    var albumName = req.params.albumName;
    var a = file.getAllImagesByAlbumName(albumName);
        if(a=='err'){
            next();
            return;
        }else{
            res.render('album',{
            'albumname':albumName,
            'images':file.getAllImagesByAlbumName(albumName)
        });
    }
    
}

exports.showUp = function(req,res){
    res.render('up',{
        albums:file.getAllAlbums()
    });
}

exports.doPost = function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
     var form = new formidable.IncomingForm();
    form.uploadDir=path.normalize(__dirname+'/../uploads/');
    form.parse(req, function(err, fields, files,next) {
      console.log(fields);
      console.log(files);
      //改名
      if(err){next();return}
      var size = parseInt(files.tupian.size);
      if(size>1024){
          res.end('图片尺寸应该小于1M');
          fs.unlink(files.tupian.path);
          return;
      }
      var ttt = sd.format(new Date(),'YYYYMMDDHHmmss');
      var ran = parseInt(Math.random()*89999+10000);
      var extname = path.extname(files.tupian.name);

      var wenjianjia = fields.wenjianjia;
      var oldpath = files.tupian.path;
      var newpath = path.normalize(__dirname+'/../uploads/'+wenjianjia +'/'+ ttt+ran+extname);
        fs.rename(oldpath,newpath,function(err){
            if(err){
                res.end('改名失败');
                return;
            }
        });
        res.end('成功');
    });
    return;
}