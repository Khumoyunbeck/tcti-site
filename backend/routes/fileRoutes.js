const express = require('express')
const router = express.Router()
const {FileCreate} = require('../controller/fileControl')
const multer = require('multer');
const path = require('path')
const md5 = require('md5');


const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/file');
    },
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: storage});
router.post('/add',upload.single('name'), FileCreate.upload)
// router.get('/:id', FileCreate.getbyId)
router.get('/all', FileCreate.getAll)


module.exports = router