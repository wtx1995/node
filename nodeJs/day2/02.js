var foo = require('./test/foo.js');
var people = require("./test/people.js");

var xiaoming = new people("小明","男","12");
xiaoming.sayhello();

console.log(foo.msg);
console.log(foo.info);
foo.showInfo();