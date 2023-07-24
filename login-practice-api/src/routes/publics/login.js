const {Router}=require('express')
const {loginHandler}=require( '../../handlers/index');
const { validateLogin } = require('../../middlewares');
const {notFoundHandler}=require('../../handlers')

const router = Router();

router.post('/',validateLogin,loginHandler)

router.use('*',notFoundHandler)

module.exports=router