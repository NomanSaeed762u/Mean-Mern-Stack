fs =require('fs')
function WriteTo(filePath,content){
    
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
      
        console.log('File has been written successfully.');
      });
}
module.exports=WriteTo;