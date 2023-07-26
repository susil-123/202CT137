const express = require('express')
const trainController = require('./../controller/trainController')
const authController = require('./../controller/authController')
const router = express.Router()

router.route('/trains').get(authController.protect,trainController.getData)
router.route('/trains/:id').get(authController.protect,trainController.getTrain)
router.route('/register').post(authController.signup)



module.exports = router;