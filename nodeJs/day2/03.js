var foo = require("foo.js");
//如果不写./ 那么默认是从node_modules文件夹引入
var bar = require("bar");//引入一个文件夹
console.log(foo.msg);
console.log(bar.msg);