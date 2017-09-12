var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        return;
    }
    // fs.stat("./album",function(err,data){
    //     //检测这个路径，是不是一个文件夹
    //     // console.log(data.isDirectory());
    // });
    var wenjianjia = [];
    fs.readdir('./album',function(err,files){
        //files是个数组，表示./album这个文件夹里的所有东西
        //包括文件和文件夹
        var length = files.length;
        for(var i = 0;i<length;i++){
            
            //又要进行一次检测
            // fs.stat('./album/'+thefilename,function(err,stats){
                
            //     if(stats.isDirectory()){
            //         wenjianjia.push(thefilename);
            //         console.log(wenjianjia)
            //     }
            //     // console.log(wenjianjia);
            // });
                          
                    var thefilename = files[i];
                   var data = fs.statSync('./album/'+thefilename);
                   if(data.isDirectory()){
                       wenjianjia.push(thefilename);
                   }
        }
               
        res.end();
    });
}).listen(3000);