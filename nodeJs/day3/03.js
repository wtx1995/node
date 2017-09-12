var express = require('express');
var app = express();
app.set("view engine","ejs");
app.get('/',function(req,res){
    res.render("haha",{
        "news":["的沙坑静待花开",'都看见爱上','大家看了']
    })
});
app.listen(3000);