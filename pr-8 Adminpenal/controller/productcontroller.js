
const categorymodels=require('../models/categorymodel')
const subcategorymodels=require('../models/subcategorymodels')
const exsubcategorymodels=require('../models/exsubcategorymodels')
const { status } = require('express/lib/response')

const productpage=async(req, res)=>{
 
    
    return res.render('product/productview')
}


const addproduct=async (req, res)=>{
try {
        const category=await categorymodels.find({status:'active'})
        const subcategory=await subcategorymodels.find({status:'active'})
    return res.render('product/productadd',{
        category,subcategory
    })

} catch (error) {
    console.log(error);
    
}
}

const ajaxcategory=(req,res)=>{
    console.log(req.query.id);
    
}
module.exports={
    productpage,addproduct,ajaxcategory
}