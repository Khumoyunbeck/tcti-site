const {allAnnouncements, newAnnouncement, delAnnouncement, editAnnouncement} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try{
            const announcements = await allAnnouncements()
            res.send(announcements)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const { 
                img,
                title_uz,
                body_uz,
                title_ru,
                body_ru,
                title_en,
                body_en,
                date
            } = req.body
            await newAnnouncement(
                img,
                title_uz,
                body_uz,
                title_ru,
                body_ru,
                title_en,
                body_en,
                date
                )
            res.send("ok")
        } catch(err) {
            console.log(err.message)
        }
    },
    DELETE: async(req, res) => {
        try {
            const { 
                id
            } = req.body
            await delAnnouncement(id)
            res.send("ok")
        } catch(err) {
            console.log(err.message)
        }
    },
    EDIT: async(req, res) => {
        try {
            const { 
                img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, id
            } = req.body
            await editAnnouncement(img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, id)
            res.send("ok")
        } catch(err) {
            console.log(err.message)
        }
    }
}