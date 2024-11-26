const express=require('express')
const { registerpage, registerusers, loginpage, dashpage, loginusers, logout, emailverifition, email } = require('../controller/authcontroller')

const routes=express.Router()

const passport=require('passport')

routes.get('/',loginpage)
routes.get('/res',registerpage)
routes.post('/insert', registerusers)
routes.post('/loginusers',passport.authenticate('local',{failureRedirect:'/'}),loginusers)
routes.get('/dash',passport.checkUser,dashpage)
routes.get('/logout',logout)
routes.get('/emailverifition', emailverifition)
routes.post('/email', email)


module.exports=routes