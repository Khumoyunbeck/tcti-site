const express = require('express')
const router = express.Router()
const {MediaCreate} = require('../controller/mediaControl')
const multer = require('multer');
const path = require('path')
const md5 = require('md5');


const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/media');
    },
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: storage});

router.post('/add',upload.single('video'), MediaCreate.upload)
router.get('/:id', MediaCreate.getbyId)
router.get('/all', MediaCreate.getAll)


module.exports = router