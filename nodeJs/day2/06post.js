var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(req,res){
      if(req.url == "/favicon.ico"){
        return;
    }else if(req.url == '/dopost'&&req.method.toLowerCase()=='post'){
        var alldata = "";
        req.addListener("data",function(chunk){
            alldata += chunk;
        });
        req.addListener('end',function(){
           var datastring = alldata.toString();
            res.end("success");
            //将datastring转为一个对象
            var dataobj = querystring.parse(datastring);
                console.log(dataobj.name);
                console.log(dataobj.sex); 
        })
    }
}).listen(3000);