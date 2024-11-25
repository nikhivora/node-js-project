const passport=require('passport')

const passportlocal=require('passport-local').Strategy


const usersmodels=require('../models/usermodels')

passport.use(new passportlocal({
    usernameField: 'email',
}, async (email, password, done) => {

    console.log(email);
    
    try {
        let user = await usersmodels.findOne({ email: email });
        if (!user || user.password != password) {
            console.log("Email and Password not valid");
            return done(null, false)
        }
        return done(null, user);
    } catch (err) {
        console.log(err);
        return done(null, false);
    }
}))


module.exports=passport