const {
    allMedia,deleteMedia
} = require('./model')

module.exports = {
    GET_ALL_MEDIA: async(req, res) => {
        try {
            const all_sc = await allMedia()
            res.send(all_sc)
        } catch(err) {
            console.log(err.message)
        }
        
    },
    DELETE: async(req, res) => {
        try {
            const {
                id
            } = req.body
            await deleteMedia(id)
            res.send('ok')
        } catch(err) {
            console.log(err.message)
        }
        
    }
}