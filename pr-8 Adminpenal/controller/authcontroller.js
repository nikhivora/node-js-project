
const usermodels = require('../models/usermodels')

const mailer = require('nodemailer')
const registerpage = (req, res) => {
  return res.render('res')
}
const loginpage = (req, res) => {
  return res.render('login')
}
const dashpage = (req, res) => {
  return res.render('dash')
}

const registerusers = async (req, res) => {
  try {
    const { name, email, password, } = req.body;
    await usermodels.create({
      name: name,
      email: email,
      password: password
    })

    return res.redirect('/')
  } catch (err) {
    console.log(err);
    return false;
  }

}

const loginusers = (req, res) => {
  return res.redirect('dash')
}
const emailverifition = (req, res) => {
  return res.render('emailverifetion')
}


const email = async (req, res) => {
  try {
    let email = req.body.usersemail;
    const user = await usermodels.findOne({ email: email })
    if (!user) {
      console.log("user is not found");
      return res.redirect('/')
    }


    const otp = Math.floor(Math.random() * 100000)

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'voranikhil121@gmail.com',
        pass: 'urch xqtc wzfi wvcp'
      }
    });

    var mailOptions = {
      from: 'voranikhil121@gmail.com',
      to: email,
      subject: 'Sending Email using Node.js',
      html: `
      helo ${otp}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        let obj = {
          otp: otp,
          email: email
        }
        res.cookie('otp', obj);
        return res.redirect('/otp')
      }
    });

  } catch (error) {
    console.log(error);
    return false
  }
}
const otppage = (req, res) => {

  if (!req.cookies['otp']) {

    return res.redirect("/")
  }
  return res.render("otppage")
}
const newpasspage = (req, res) => {
  if (!req.cookies['otp']) {

    return res.redirect("/")
  }
  return res.render("newpass")
}
const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
      return false
    }
  })

  return res.redirect('/')
}


const otppost = (req, res) => {
  let otp = req.body.otp;
  let userotp = req.cookies.otp.otp
  if (otp == userotp) {
    return res.redirect('/newpasspege')
  } else {
    console.log("OTP is not vaild");
    return false
  }
}

const newpass = async (req, res) => {
  let { newpass, compass } = req.body;
  if (newpass == compass) {
    const usereamil = req.cookies.otp.email
    await usermodels.findOneAndUpdate({ email: usereamil }, {
      password: newpass
    })
    return res.redirect('/')
  } else {
    console.log("confirm password and new password not match");

    return res.redirect('/newpasspege')
  }
}
module.exports = {
  registerpage, registerusers, loginpage, dashpage, loginusers, logout, emailverifition, email, otppage, otppost, newpass, newpasspage
}