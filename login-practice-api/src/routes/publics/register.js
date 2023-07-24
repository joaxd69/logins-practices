const {registerHandler}=require('../../handlers')
const {Router}=require('express')
const { validateRegister } = require('../../middlewares')
const {notFoundHandler}=require('../../handlers')

const router=Router()

router.post('/',validateRegister,registerHandler)
router.use('*',notFoundHandler)
module.exports=router