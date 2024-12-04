const express=require('express')

const routes=express.Router()

const { categoryPage, addCategory, viewcategotypage, categorydelete, categoryedit, Categoryupdate } = require('../controller/categorycontroller')


const passport=require('passport')

routes.get('/categoryPage',passport.checkUser,categoryPage)
routes.post('/addCategory', passport.checkUser,addCategory)
routes.get('/viewcategotypage',viewcategotypage)
routes.get('/categorydelete',categorydelete)
routes.get('/categoryedit',categoryedit)
routes.post('/editCategory',Categoryupdate)
 module.exports=routes