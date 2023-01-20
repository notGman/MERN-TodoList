const express = require('express')

const router = new express.Router()
const controller = require('../controllers/controller')

router.get('/',controller.getAllData)
router.post('/add',controller.addNewData)
router.patch('/edit/:_id',controller.editData)
router.delete('/delete',controller.deleteData)

module.exports = router
