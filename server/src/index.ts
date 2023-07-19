import express, { json } from "express"
import mongoose from "mongoose"
import router from "./router/userRouter"
import cors from 'cors'

const app = express()

app.use(cors({
    origin: "*",
    credentials: true, //access-control-allow-credentials:true 
}))

app.use(express.json())




app.use("/",router)

const MONGO_URL="mongodb+srv://admin-evara:JUSKM1111a@evara-ecom.il0m4vi.mongodb.net/Todo-TS"
mongoose.connect(MONGO_URL).then(()=>{
    console.log("DB Connected")
}).then(()=>{
    app.listen (4000, ()=>{
        console.log("port is running in 4000")
    })
}).catch((err)=>{
console.log("err is", err)
})