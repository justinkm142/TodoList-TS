 import mongoose from "mongoose";



 const tasksSchema = new mongoose.Schema({
    todo:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        default:false
    }
 })

 const UserSchema =new mongoose.Schema({
    userId :{
        type:String,
        required:true
    },
 
    tasks : {
        type:[tasksSchema]
    }
 })

 export const UserModel = mongoose.model('User',UserSchema)

 

 



 