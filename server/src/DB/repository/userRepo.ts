import {UserModel} from '../models/UserSchema'

interface tasks{
    task:string;
    id:string;
    isCompleted:boolean;
 }


 export const getUserData =(userId:string)=> UserModel.find({userId}).exec();
 export const updateUserData =(userId:string,tasks:tasks[])=>UserModel.findOneAndUpdate({userId},{$set:{tasks:tasks}},{returnOriginal: false}).exec();
 export const createUserData = (userId:string)=>UserModel.create({userId})