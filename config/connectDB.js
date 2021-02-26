1// require mongoose
const mongoose=require('mongoose');
require('dotenv').config({path:'./config/.env'});

const connectDB=async()=>{
   
    try {
        await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false,useCreateIndex:true} );
        console.log('mongoDB well connected ');

    }
     catch (error) { console.log(error)};
}


module.exports=connectDB;