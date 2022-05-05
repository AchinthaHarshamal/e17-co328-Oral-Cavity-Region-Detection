var fs = require('fs');
const {uploadFile , getFileURL , deleteFile , listFiles} = require('./storage-config');


// list all content in the container
// debuging pps
listFiles()


// load a file from the local storage

let image;
try{
    image = fs.readFileSync('./configurations/test.jpeg')
}catch(err){
    console.log(err);
}
/*
const uploadfileName = 'test3.jpeg'
uploadFile(uploadfileName, image)
.then(res => console.log('Uploaded the file ' ,uploadfileName ))
.catch(err => console.log(err))
*/

/* Get Download URL */
/*
const filename = 'test3.jpeg';
getFileURL(filename)
    .then(res => console.log("URL : " ,res))
    .catch(err => console.log(err))
*/
/* Delete File */

const deleteFileName = 'test3.jpeg'
deleteFile(deleteFileName)
.catch(err=> console.log('file not exist to delete'))
