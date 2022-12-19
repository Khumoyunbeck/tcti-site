const {
    fetch,
    fetchAll
} = require('../../lib/postgres')

const ALL_SC = `
    SELECT
        *
    FROM
        sections
    WHERE
        menu_id = 1
`
const CONSIST_SC = `
    SELECT
        *
    FROM
        sections
    WHERE
        menu_id = 2
`
const SB_STUDENT_SC = `
    SELECT
        *
    FROM
        sections
    WHERE
        menu_id = 3
`
const STUDENT_SC = `
    SELECT
        *
    FROM
        sections
    WHERE
        menu_id = 4
`
const WORKING_SC = `
    SELECT
        *
    FROM
        sections
    WHERE
        menu_id = 5
`
const CONTACTS_SC = `
    SELECT
        *
    FROM
        sections
    WHERE
        menu_id = 6
`
const INTERACTIVE_SC = `
    SELECT
        *
    FROM
        sections
    WHERE
        menu_id = 7
`
const CORRUPSION_SC = `
    SELECT
        *
    FROM
        sections
    WHERE
        menu_id = 8
`
const GET_ONE = `
    SELECT
        *
    FROM
        sections
    WHERE
        id = $1
`
const NEW_SC = `
    INSERT INTO sections(section_name_uz, section_name_ru, section_name_en, section_title_uz, section_title_ru, section_title_en, section_main_uz, section_main_ru, section_main_en, menu_id, filter_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
`

const EDIT_SC = `UPDATE sections SET section_name_uz = $1, section_name_ru = $2, section_name_en = $3, section_title_uz = $4, section_title_ru = $5, section_title_en = $6, section_main_uz = $7, section_main_ru = $8, section_main_en = $9,  menu_id = $10, filter_id = $11 WHERE id = $12`

const DEL_SC = `
    DELETE FROM sections WHERE id = $1
`

const GET_ALL = `SELECT * FROM sections`

const FILTER = `SELECT * FROM sections where filter_id = $1`


const allSubCategories = () => fetchAll(ALL_SC)
const consistSubCategories = () => fetchAll(CONSIST_SC)
const subStudentSubCategories = () => fetchAll(SB_STUDENT_SC)
const studentSubCategories = () => fetchAll(STUDENT_SC)
const workingSubCategories = () => fetchAll(WORKING_SC)
const contactsSubCategories = () => fetchAll(CONTACTS_SC)
const interactiveSubCategories = () => fetchAll(INTERACTIVE_SC)
const corruptionSubCategories = () => fetchAll(CORRUPSION_SC)
const getOneSC = (id) => fetchAll(GET_ONE, id)
const newSubCategory = (section_name_uz, section_name_ru, section_name_en, section_title_uz, section_title_ru, section_title_en, section_main_uz, section_main_ru, section_main_en, menu_id, filter_id) => fetchAll(NEW_SC, section_name_uz, section_name_ru, section_name_en, section_title_uz, section_title_ru, section_title_en, section_main_uz, section_main_ru, section_main_en, menu_id, filter_id)
const delSubCategory = (id) => fetchAll(DEL_SC, id)
const getAllSC = () => fetchAll(GET_ALL)
const editSC = (section_name_uz, section_name_ru, section_name_en, section_title_uz, section_title_ru, section_title_en, section_main_uz, section_main_ru, section_main_en, menu_id, filter_id, id) => fetchAll(EDIT_SC, section_name_uz, section_name_ru, section_name_en, section_title_uz, section_title_ru, section_title_en, section_main_uz, section_main_ru, section_main_en, menu_id, filter_id, id)
const filterSC = (filter) => fetchAll(FILTER, filter)

module.exports = {
    allSubCategories,
    consistSubCategories,
    subStudentSubCategories,
    studentSubCategories,
    workingSubCategories,
    contactsSubCategories,
    interactiveSubCategories,
    corruptionSubCategories,
    newSubCategory,
    delSubCategory,
    getOneSC,
    getAllSC,
    editSC,
    filterSC
}