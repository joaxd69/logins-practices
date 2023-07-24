const {Router} = require('express');
const router= Router();
const {notFoundHandler}=require('../handlers')
const {validateauth}=require( '../middlewares')
router.use('/',require('./publics'))
router.use('/',require('./privates'))
router.use('*',notFoundHandler)
module.exports=router

