import "dotenv/config"
import express, { Request, Response } from "express"
import cors from 'cors'
import mongoose from "mongoose"

import userRouter from "./routes/user.route"

mongoose.connect(process.env.MONGO_URL as string).then(()=> {
    console.log("Connected to database.")
})

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/user", userRouter)

app.listen(7000, ()=> {
    console.log("Server is listening to port 7000")
})