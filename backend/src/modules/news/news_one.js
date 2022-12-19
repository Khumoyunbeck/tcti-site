const {newsOne} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const news = await newsOne(req.params.id)
            res.send(news)
        } catch(err) {
            console.log(err.message)
        }
    }
}