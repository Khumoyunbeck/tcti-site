const Video = require('../models/media')

exports.MediaCreate = {
    upload:async(req, res)=>{
        try {
            const b = new Video({
                video:`/public/media/${req.file.filename}`
            })
            res.json(b)
        } catch (e) {
            console.log(e)
        }
    },
    getAll:async(req, res)=>{
        try {
            const c = await Video.find()
            res.json(c)
        } catch (e) {
            console.log(e)
        }
    },
    getbyId:async(req, res)=>{
        try {
            const {id} = req.params
            const g = await Video.findById(id)
            res.json(g)
        } catch (e) {
            console.log(e)
        }
    }
}