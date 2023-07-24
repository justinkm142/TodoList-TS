import express, { json } from "express"
import mongoose from "mongoose"
import router from "./router/userRouter"
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(cors({
    origin: "*",
    credentials: true, //access-control-allow-credentials:true 
}))

app.use(express.json())




app.use("/",router)

const MONGO_URL=process.env.MONGO_URL
mongoose.connect(MONGO_URL).then(()=>{
    console.log("DB Connected")
}).then(()=>{
    app.listen (4000, ()=>{
        console.log("port is running in 4000")
    })
}).catch((err)=>{
console.log("err is", err)
})