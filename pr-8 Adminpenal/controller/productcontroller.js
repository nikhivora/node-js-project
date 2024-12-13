
const categorymodels=require('../models/categorymodel')
const subcategorymodels=require('../models/subcategorymodels')
const exsubcategorymodels=require('../models/exsubcategorymodels')
const productmodels=require('../models/productmoels')
const productpage=async(req, res)=>{

    try {
       
        const exsucategory=await productmodels.find({}).populate("categoryid").populate("subcategoryid").populate("exsubcategoryid")
        console.log(exsucategory);
        
        return res.render('product/productview',{
            exsucategory
        })

    } catch (error) {
        console.log(error);
        
    }
}


const addproduct=async (req, res)=>{
try {
        const category=await categorymodels.find({})
        const subcategory=await subcategorymodels.find({})
    return res.render('product/productadd',{
        category,subcategory
    })

} catch (error) {
    console.log(error);
    
}
}
const insertrecord=async(req, res)=>{
try {
   const{category,subcategory,exsubcategory,product,price,desc}=req.body;
  let up= await productmodels.create({
    categoryid:category,
    subcategoryid:subcategory,
    exsubcategoryid:exsubcategory,
    product:product,
    price:price,
    desc:desc,
    image:req.file.path
   })

   
    return res.redirect('/product/addproduct')
    
} catch (error) {
   console.log(error);
    
}
}

const ajaxcategory=async(req,res)=>{

    try {
        
        const id=req.query.id    
        const subcategory=await exsubcategorymodels.find({subcategoryid:id})    
        return res.send({
            success:true,
            message:'hali gayu',
            subcategory
        })
        
    } catch (error) {
        console.log(error);
        return false
    }
}
module.exports={
    productpage,addproduct,ajaxcategory,insertrecord
}