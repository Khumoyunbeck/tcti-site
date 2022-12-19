const { fetch, fetchAll } = require('../../lib/postgres')

const NEWS = `
    SELECT
        *
    FROM
        news
`
const NEWS_ONE = `
    SELECT
        *
    FROM
        news
    WHERE
        id = $1
`
const NEW_NEWS = `
    INSERT INTO news(img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
`

const EDIT_NEWS = `UPDATE news SET img = $1, title_uz = $2, body_uz = $3, title_ru = $4, body_ru = $5, title_en = $6, body_en = $7 WHERE id = $8`

const DEL_NEWS = `
    DELETE FROM news WHERE id = $1
`


const allNews = () => fetchAll(NEWS)
const newsOne = (id) => fetchAll(NEWS_ONE, id)
const newNews = (img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, date) => fetchAll(NEW_NEWS, img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, date)
const editNews = (img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, id) => fetchAll(EDIT_NEWS, img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, id)
const delNews = (id) => fetchAll(DEL_NEWS, id)

module.exports = {
    allNews,
    newsOne,
    newNews,
    editNews,
    delNews
}