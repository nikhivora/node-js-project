const { log } = require('console')
const usermodels = require('../models/usermodels')
const blogmodels = require('../models/blogmodels')
const fs = require('fs')
const resiterpage = (req, res) => {
    return res.render('resiter')

}
const loginpage = (req, res) => {
    if (res.locals.users) {
        return res.redirect('/viewblog')
    }
 
    return res.render('login');
}

const Resiterusers = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        console.log(req.body);
        await usermodels.create({
            name: name, email: email, password: password
        })
        return res.redirect('/')

    } catch (error) {
        console.log(error);
        return false
    }

}

const loginuseres = async (req, res) => {

    try {

        return res.redirect('/viewblog')
    } catch (error) {
        console.log(error);
        return false

    }
}

const addblogpage = async (req, res) => {
    return res.render('addblog',)

}

const addblogusers = async (req, res) => {

    try {
        const { title, desc } = req.body
        await blogmodels.create({
            title,
            desc,
            image: req.file.path
        })
        return res.redirect('/viewblog')

    } catch (error) {
        console.log(error);
        return false

    }
}


const viewblog = async (req, res) => {

    try {


        let users = await blogmodels.find({})
        return res.render('viewblog', {
            users
        })




    } catch (error) {
        console.log(error);
        return false

    }


}

const deleterecord = async (req, res) => {

    try {


        let id = req.query.id

        let single = await blogmodels.findById(id)
        fs.unlinkSync(single.image)

        await blogmodels.findByIdAndDelete(id)
        return res.redirect('/viewblog')
    } catch (error) {
        console.log(error);

    }
}

const editrecord = async (req, res) => {

    try {
        let id = req.query.id;
        let single = await blogmodels.findById(id);
        return res.render('editblog', {
            single
        })

    } catch (error) {
        console.log(error);

    }
}

const upblog = async (req, res) => {

    try {

        const { editid, title, desc } = req.body


        if (req.file) {
            let single = await blogmodels.findById(editid)
            fs.unlinkSync(single.image)

            await blogmodels.findByIdAndUpdate(editid, {
                title, desc,
                image: req.file.path
            })
            return res.redirect('/viewblog')


        } else {
            let single = await blogmodels.findById(editid)

            await blogmodels.findByIdAndUpdate(editid, {
                title, desc,
                image: single.image
            })
            return res.redirect('/viewblog')

        }

    } catch (error) {
        console.log(Error);

    }

}

const logout = (req, res) => {

    req.logout((err) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.redirect('/');
    });
}
const Read = async (req, res) => {

    try {
        console.log(req.query.id);

        let id = req.query.id
        const users = await blogmodels.findById(id)

        console.log(users);

        return res.render('readmoreblog', {
            users
        })

    } catch (error) {
        console.log(error);

    }

}

module.exports = {
    resiterpage,
    loginpage,
    Resiterusers,
    loginuseres,
    addblogpage, addblogusers, viewblog, deleterecord, editrecord, upblog, logout, Read

}