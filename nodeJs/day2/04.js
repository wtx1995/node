//需要使用一个日期时间，格式为20170714
var sd = require("silly-datetime");
var ttt = sd.format(new Date(),'YYYYMMDDHHmm');
console.log(ttt);
