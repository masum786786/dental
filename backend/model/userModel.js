import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    patientName:{
        type:String,
        required: true
    },
    problemDescription:{
        type : String,
        required : true
    },
    address:{
        type : String,
        required : true
    },
    mobileNumber:{
        type : Number,
        required : true
    },
    age:{
        type : Number,
        required : true
    }
})

export default mongoose.model("users",userSchema)