import express from 'express'

import { getUserData, updateUserData, createUserData } from '../DB/repository/userRepo'



export const getData = async (req:express.Request, res:express.Response )=>{
    try {
        const {userId}:{ userId?: string } = req.query
        if(!userId){
           return res.status(400).json({message: "error",error: "userId Not Found"})
        }
        
        const userData = await getUserData(userId)
        if(userData.length===0){
            const userData = await createUserData(userId)
            return res.status(200).json({message: "success", userData})
        }

        return res.status(200).json({message: "success", userData:userData[0]})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "error",error: error} )
    }
}  


export const updateData = async(req:express.Request, res:express.Response)=>{
    try {
       
        const {userId, tasks} = req.body
        if(!userId || !tasks){
            return  res.status(400).json({message: "error",error: "userId or tasks Not Found"})
        } 
        const userData = await updateUserData(userId,tasks)
        return res.status(200).json({message: "success", userData})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "error",error: error} )
    }
}

export const createUser = async(req:express.Request, res:express.Response)=>{
    try {
        const {userId} = req.body
        if(!userId){
            return res.status(400).json({message: "error",error: "userId Not Found"})
        }

        const userData = await createUserData(userId)
        return res.status(200).json({message: "success", userData})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "error",error: error} )
    }
}