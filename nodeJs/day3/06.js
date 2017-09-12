var http = require('http');
var a = 100;
var server = http.createServer(function(req,res){
    a++;
    res.end(a.toString());
}).listen(3000);