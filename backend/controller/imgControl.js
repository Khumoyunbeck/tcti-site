const Img = require('../models/img')

exports.ImgCreate = {
    upload:async(req, res)=>{
        try {
            const b = new Img({
                img:`/public/image/${req.file.filename}`
            })
            await b.save()
            res.json(b)
        } catch (e) {
            console.log(e)
        }
    },
    getAll:async(req, res)=>{
        try {
            const c = await Img.find().sort({date: -1})
            await c.save()
            res.json(c)
        } catch (e) {
            console.log(e)
        }
    },
    getbyId:async(req, res)=>{
        try {
            const {id} = req.params
            const g = await Img.findById(id)
            res.json(g)
        } catch (e) {
            console.log(e)
        }
    }
}