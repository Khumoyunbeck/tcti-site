const File = require('../models/file')
const {addImages} = require('../src/modules/uploader/model')

exports.FileCreate = {
    upload:async(req, res)=>{
        try {
            const b = new File({
                name:`${req.file.filename}`
            })
            await addImages(b.name)
            res.json(b)
        } catch (e) {
            console.log(e)
        }
    },
    getAll:async(req, res)=>{
        try {
            const c = await File.find()
            res.json(c)
        } catch (e) {
            console.log(e)
        }
    }
}