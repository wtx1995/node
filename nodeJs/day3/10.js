var express = require('express');
var app = express();


app.use('/jingtai',express.static('./public'));
app.get('/images',function(req,res){
    res.send("haha")
})
//会自动识别err参数，如果有，那么就这个函数能捕获err
app.use(function(req,res){
        res.status(404).send("没有这个页面");
   
});

app.listen(3000);