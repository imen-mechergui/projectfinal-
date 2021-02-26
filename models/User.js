1//rquire mongoose
const mongoose=require("mongoose");
const { string } = require("prop-types");
2// require Shema
const Schema=mongoose.Schema;

3// create UserShema
const UserSchema=new Schema({

    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
 rule:{
     type:String,
     default:"client"
 }
    
})
module.exports=User=mongoose.model('User', UserSchema);