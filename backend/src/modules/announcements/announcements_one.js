const {announcementOne} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try{
            const announcements = await announcementOne(req.params.id)
            res.send(announcements)
        } catch(err) {
            console.log(err.message)
        }
    }
}