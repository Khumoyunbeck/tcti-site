const {allNews, newNews, delNews, editNews} = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            const news = await allNews()
            res.send(news)
        } catch(err) {
            console.log(err.message)
        }
    },
    POST: async(req, res) => {
        try {
            const new_news = await newNews(req.body.img, req.body.title_uz, req.body.body_uz, req.body.title_ru, req.body.body_ru, req.body.title_en, req.body.body_en, req.body.date)
            res.send('ok')
        } catch(err) {
            console.log(err.message)
        }
    },
    DELETE: async(req, res) => {
        try {
            const del_category = await delNews(req.body.id)
            res.sendStatus(200)
        } catch(err) {
            console.log(err.message)
        }
    },
    UPDATE: async(req, res) => {
        try {
            const {
                img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, id
            } = req.body
            await editNews(img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, id)
            res.sendStatus(200)
        }catch(error){
            console.log(error.message);
        }
    }
}