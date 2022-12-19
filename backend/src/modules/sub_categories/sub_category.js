const {
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
    getAllSC,
    editSC,
    getOneSC,
    filterSC
} = require('./model')

module.exports = {
    GET_ALL: async(req, res) => {
        try {
            const all_sc = await getAllSC()
            res.send(all_sc)
        } catch(err) {
            console.log(err.message)
        }
    },
    ADD_NEW : async(req, res) => {
        try {
            const {
                section_name_uz, section_name_ru, section_name_en, section_title_uz, section_title_ru, section_title_en, section_main_uz, section_main_ru, section_main_en, menu_id, filter_id
            } = req.body
            await newSubCategory(section_name_uz, section_name_ru, section_name_en, section_title_uz, section_title_ru, section_title_en, section_main_uz, section_main_ru, section_main_en, menu_id, filter_id)
            res.send('ok')
        } catch(err) {
            console.log(err.message)
        }
    },
    DELETE: async(req, res) => {
        try {
            const {
                id
            } = req.body
            await delSubCategory(id)
            res.send('ok')
        } catch(err) {
            console.log(err.message)
        } 
    },
    EDIT: async(req, res) => {
        try {
            const {
                section_name_uz, section_name_ru, section_name_en, section_title_uz, section_title_ru, section_title_en, section_main_uz, section_main_ru, section_main_en, menu_id, id, filter_id
            } = req.body
            await editSC(section_name_uz, section_name_ru, section_name_en, section_title_uz, section_title_ru, section_title_en, section_main_uz, section_main_ru, section_main_en, menu_id, filter_id, id)
            res.send('ok')
        } catch(err) {
            console.log(err.message)
        } 
    },
    GET_ONE: async(req, res) => {
        try {
            const {
                id
            } = req.params
            const data = await getOneSC(id)
            res.send(data)
        } catch(err) {
            console.log(err.message)
        } 
    },
    GET_ALL_SC: async(req, res) => {
        try {
            const data = await allSubCategories()
            res.send(data)
        } catch(err) {
            console.log(err.message)
        } 
    },
    GET_CONSISTS_SC: async(req, res) => {
        try {
            const data = await consistSubCategories()
            res.send(data)
        } catch(err) {
            console.log(err.message)
        } 
    },
    GET_SUB_STUDENT_SC: async(req, res) => {
        try {
            const data = await subStudentSubCategories()
            res.send(data)
        } catch(err) {
            console.log(err.message)
        } 
    },
    GET_STUDENT_SC: async(req, res) => {
        try {
            const data = await studentSubCategories()
            res.send(data)
        } catch(err) {
            console.log(err.message)
        } 
    },
    GET_WORKING_SC: async(req, res) => {
        try {
            const data = await workingSubCategories()
            res.send(data)
        } catch(err) {
            console.log(err.message)
        } 
    },
    GET_CONTACTS_SC: async(req, res) => {
        try {
            const data = await contactsSubCategories()
            res.send(data)
        } catch(err) {
            console.log(err.message)
        } 
    },
    GET_INTERACTIVE_SC: async(req, res) => {
        try {
            const data = await interactiveSubCategories()
            res.send(data)
        } catch(err) {
            console.log(err.message)
        } 
    },
    GET_CORRUPTION_SC: async(req, res) => {
        try {
            const data = await corruptionSubCategories()
            res.send(data)
        } catch(err) {
            console.log(err.message)
        } 
    },
    FILTER_SC: async(req, res) => {
        try {
            const {
               question 
            } = req.params
            const data = await filterSC(question)
            res.send(data)
        } catch(err) {
            console.log(err.message)
        }
    }
}