const categorymodels=require('../models/categorymodel')

const categoryPage=(req, res)=>{
return res.render('category/from')
}


const addCategory= async (req, res)=>{
try {

    const {category}=req.body;
    let user=await  categorymodels.create({
        category:category
    })
    return res.redirect('/category/viewcategotypage')
    
    
} catch (error) {
    console.log(error);
    
}
}

const viewcategotypage= async(req, res)=>{

    try {
        let users=await categorymodels.find({})
        return res.render('category/viewcategoty',{
            users
        })

    } catch (error) {
        console.log(error);
        
    }
}
module.exports={
    categoryPage,addCategory,viewcategotypage
}