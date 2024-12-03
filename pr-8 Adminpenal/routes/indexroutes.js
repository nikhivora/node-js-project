const express=require('express')

const routes=express.Router()

routes.use('/', require('../routes/authrotes'))
routes.use('/category', require('../routes/cetegaryroutes'))

module.exports=routes