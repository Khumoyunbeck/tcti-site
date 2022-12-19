const {
    fetch,
    fetchAll
} = require('../../lib/postgres')

const ALL_MEDIA = `
    SELECT
        *
    FROM
        media
`

const ADD_IMAGE = `
    INSERT INTO media (path) VALUES ($1)
`

const DELETE = `
    DELETE FROM media WHERE id = $1
`


const allMedia = () => fetchAll(ALL_MEDIA)
const addImages = (path) => fetchAll(ADD_IMAGE, path)
const deleteMedia = (id) => fetchAll(DELETE, id)

module.exports = {
    addImages,
    allMedia,
    deleteMedia
}