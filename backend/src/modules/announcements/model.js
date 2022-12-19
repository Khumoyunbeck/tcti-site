const { fetch, fetchAll } = require('../../lib/postgres')

const ANNOUNCEMENTS = `
    SELECT
        *
    FROM
        announcements 
`
const ANNOUNCEMENT_ONE = `
    SELECT
        *
    FROM
        announcements
    WHERE
        id = $1
`
const NEW_ANNOUNCEMENT = `
    INSERT INTO announcements(img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
`

const EDIT_ANNOUNCEMENT = `UPDATE announcements set img = $1, title_uz = $2, body_uz = $3, title_ru = $4, body_ru = $5, title_en = $6, body_en = $7 WHERE id = $8`

const DEL_ANNOUNCEMENT = `
    DELETE FROM announcements WHERE id = $1
`


const allAnnouncements = () => fetchAll(ANNOUNCEMENTS)
const announcementOne = (id) => fetchAll(ANNOUNCEMENT_ONE, id)
const newAnnouncement = (img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, date) => fetchAll(NEW_ANNOUNCEMENT, img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, date)
const editAnnouncement = (img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, id) => fetchAll(EDIT_ANNOUNCEMENT, img, title_uz, body_uz, title_ru, body_ru, title_en, body_en, id)
const delAnnouncement = (id) => fetchAll(DEL_ANNOUNCEMENT, id)

module.exports = {
    allAnnouncements,
    announcementOne,
    newAnnouncement,
    editAnnouncement,
    delAnnouncement
}