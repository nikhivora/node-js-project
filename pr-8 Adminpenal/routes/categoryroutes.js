const express=require('express')

const routes=express.Router()

const { categoryPage, addCategory, viewcategotypage } = require('../controller/categorycontroller')

routes.get('/categoryPage',categoryPage)
routes.post('/addCategory',addCategory)
routes.get('/viewcategotypage',viewcategotypage)

 module.exports=routes