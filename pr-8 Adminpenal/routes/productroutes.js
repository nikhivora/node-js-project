const express=require('express')
const {  productpage, addproduct, ajaxcategory } = require('../controller/productcontroller')

const routes=express.Router()


routes.get('/productpage',productpage)
routes.get('/addproduct',addproduct)

routes.get('/ajaxcategory',ajaxcategory)

module.exports=routes