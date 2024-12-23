const express = require('express');


const routes = express.Router(); 

const { loginpage, resiterpage, Resiterusers, loginuseres,  addblogpage, addblogusers, viewblog, deleterecord, editrecord, upblog,logout, Read} = require('../controller/controller');


const multer=require('multer');
const passport = require('passport');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage }).single('image')

routes.get('/', loginpage);
routes.get('/register',resiterpage); 
routes.post('/insert',Resiterusers)
routes.post('/login',passport.authenticate('local',{failureRedirect:'/'}),loginuseres)
routes.get('/addblogpage',addblogpage); 
routes.post('/addblog',upload,addblogusers)
routes.get('/viewblog',passport.checkUser,viewblog); 
routes.get('/delete',deleterecord); 
routes.get('/edit',editrecord); 
routes.get('/logout',logout); 
routes.post('/up',upload,upblog)
routes.get('/Read',Read); 

module.exports = routes;