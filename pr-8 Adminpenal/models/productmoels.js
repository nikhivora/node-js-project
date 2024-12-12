const mongoose=require('mongoose')


const userschama=mongoose.Schema({
    categoryid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    
    subcategoryid:{
        type:mongoose.Schema.Types.ObjectId,
    ref:"subcategory"
    },
    exsubcategory:{
          type:mongoose.Schema.Types.ObjectId,
    ref:"Exsubcategory"
    },

    status:{
        type:String,
       default:'deactive'
    },
   
})

const producat=mongoose.model('producat',userschama)

module.exports=producat