const express = require('express')

const port = 9000

const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    return res.render('index', {
        title: "index page",
        users: [
            {
                id: 1,
                name: "jay",
                pass: 1234,
            },
            {
                id: 2,
                name: "ajay",
                pass: 123,
            },
            {
                id: 3,
                name: "varjay",
                pass: 234,
            }
        ]
    })
})

app.get('/about', (req, res) => {
    return res.render('about')
})

app.get('/home', (req, res) => {
    return res.render('home')
})
app.get('/contact', (req, res) => {
    return res.render('contact')
})

app.listen(port, (err) => {
    if (err) {
        console.log("err");
    }
    console.log(`server start on poret ;- ${port}`);

})