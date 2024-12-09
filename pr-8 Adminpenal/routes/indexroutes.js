const express=require('express')

const routes=express.Router()

routes.use('/', require('../routes/authrotes'))
routes.use('/category', require('./categoryroutes'))
routes.use('/subcategory', require('./subcatrgoryroutes'))
routes.use('/exsubcategory', require('./exsubcategoryroutes'))

module.exports=routes