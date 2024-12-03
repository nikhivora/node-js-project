const mongoose=require('mongoose')


const userschama=mongoose.Schema({
    category:{
        type:String,
        require:true
    },
   
})

const user=mongoose.model('category',userschama)

module.exports=user