var fs = require('fs');

exports.getAllAlbums = function(){
    var allAlbums = [];
    var files = fs.readdirSync('./uploads');
    for(var i=0;i<files.length;i++){
        var albumsContent = fs.statSync('./uploads/'+files[i]);
            if(albumsContent.isDirectory()){
                allAlbums.push(files[i]);
            }
        }
      return allAlbums;
}
//通过文件名，得到所有图片
exports.getAllImagesByAlbumName = function(albumName){
    var allImages = [];
    try{
        var files = fs.readdirSync('./uploads/'+albumName);
        for(var i =0;i<files.length;i++){
            var imagesContent = fs.statSync('./uploads/'+albumName+'/'+files[i]);
            if(imagesContent.isFile()){
                allImages.push(files[i]);
            }
        }
        return allImages;
    }catch(err){
        return 'err';
    }
   
}