//这个模块里面封装了所有对数据库的常用操作
var MongoClient = require("mongodb").MongoClient;
var settings = require('../setting.js')

function __connectDB(callback){
    var url = settings.dburl;
    //连接数据库
    MongoClient.connect(url,function(err,db){
        callback(err,db);
    });
}
//插入数据
exports.insertOne = function(collectionName,json,callback){
    __connectDB(function(err,db){
        if(err){
            callback(err,db);
            return;
        }
        db.collection(collectionName).insertOne(json,function(err,result){
            callback(err,result);
            db.close();
        })
    })
};

//查找数据,找到所有数据。args是个对象{"pageamount":10,"page":10}
exports.find = function(collectionName,json,c,d){
    var result = [];
    if(arguments.length == 3){
        //那么参数c就是callback，参数d没有传。
        var callback = c;
         //应省略的条数
        var skipnumber = 0;
        //数目限制
        var limit = 0;
    }else if(arguments.length==4){
        var callback = d;
        var args = c;
        //应省略的条数
        var skipnumber = args.pageamount*args.page||0;
        //数目限制
        var limit = args.pageamount||0;
        //排序方式
        var sort = args.sort||{};
    }else{
        throw new Error("find函数的参数个数,必须是3个，或者4个");
    }
    
    //连接数据库，连接之后查找所有
    __connectDB(function(err,db){
        var cursor = db.collection(collectionName).find(json).skip(skipnumber).limit(limit).sort(sort);
        cursor.each(function(err,doc){
            if(err){
                callback(err,null);
                db.close();
                return;
            }
            if(doc!=null){
                result.push(doc);
            }else{
                callback(null,result);
                db.close();
            }
        })
    })
}

//删除
exports.deleteMany = function(collectionName,json,callback){
    __connectDB(function(err,db){
        if(err){
              callback(err,null);
                db.close();
                return;
        }
        //删除
        db.collection(collectionName).deleteMany(
            json,
            function(err, results) {
                db.close();
                callback(err, results);
            }
        );
    })
}

//修改
exports.updateMany = function(collectionName,json1,json2,callback){
    __connectDB(function(err,db){
        if(err){
            db.close();
            return;
        }
        db.collection(collectionName).updateMany(
            json1,
            json2, 
            function(err, results) {
            db.close();
            callback(err, results);
        });
    })
}

exports.getAllCount = function(collectionName,callback){
    __connectDB(function(err,db){
        db.collection(collectionName).count({}).then(function(count){
            callback(count);
            db.close();
        })
    })
}