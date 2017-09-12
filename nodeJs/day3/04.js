var express = require("express");
var app = express();

app.get('/AAb',function(req,res){
    res.send('您好');
});

app.get("/student/:id",function(req,res){
    var id = req.params['id'];
    res.send(id)
})
app.listen(3000);