const path = require ('path'); 
const multer = require('multer');
//la destination des upload se fait sur cette url dans public
// ici on lui dit où enregistrer et comment enregistrer les fichiers ex:jpg
const storage = multer.diskStorage({
    destination : function(req,file, cb) {cb(null,__dirname+'/../../public/')},
    filename:function(eq,file, cb) {cb(null,Date.now() + path.extname(file.originalname))}
});
const upload = multer({storage:storage});
//upload=multer après avoir été configuré
module.exports = upload