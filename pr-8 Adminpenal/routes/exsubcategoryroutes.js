const express=require('express')

const routes=express.Router()

const { exsubcategortypage, addexsubcategortypage, exsubaddCategory, exsubcategoryedit, exsubcategorydelete, changstatus } = require('../controller/exsubcategoryocntroller')

 routes.use('/exsubcategortypage',exsubcategortypage)
 routes.use('/addexsubcategortypage',addexsubcategortypage)
 routes.post('/exsubaddCategory',exsubaddCategory)
routes.get('/exsubcategoryedit',exsubcategoryedit)
routes.get('/exsubcategorydelete',exsubcategorydelete)
routes.get('/changstatus',changstatus)
 module.exports=routes