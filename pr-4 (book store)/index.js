const express= require("express")

const port =9000

const app= express()
app.set("view engine", "ejs")
app.use(express.urlencoded())

const database=require('./config/db')

const Usersmodels=require("./models/usersmodels")



app.post("/insert",(req,res)=>{
   const {name,price,pages,author}=req.body
   console.log("Body Data ===> ",req.body)
   Usersmodels.create({
    name,price,pages,author
   }).then((data)=>{
console.log(data);
return res.redirect("/add")
   })
   
})

app.get("/add",(req,res)=>{
    return res.render("add")
})
app.get("/",(req,res)=>{
    Usersmodels.find({})
    .then((data)=>{

        return res.render("view",{
            data
        })
    })
   
})
app.get("/edit",(req,res)=>{


    let id=req.query.id
Usersmodels.findByIdAndUpdate(id)
.then((data)=>{
return res.render('edit',{
    data
})
})

})
app.get("/delete",(req,res)=>{
    let id =req.query.deleteId
    console.log(id);
    
   Usersmodels.findByIdAndDelete(id)
   .then((data)=>{
  console.log(data);
  return res.redirect("/")
    
   })
    
})

app.post("/up",(req,res)=>{
  const  {editid,name,price,pages,author}=req.body
  Usersmodels.findByIdAndUpdate(editid,{
    name,price,pages,author
  })
  .then((data)=>{
return res.redirect('/')
  })
    
})
app.listen(port,(err)=>{
    if (err) {
        console.log(err); 
    }
    console.log('server id runing',port);
})