import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { router } from "./routes/VehicleRoute.js"
import { UserRouter } from "./routes/UserRoute.js"
import bookingRouter from "./routes/BookingcarRoute.js"
const app =express()
app.use(express.json())
app.use(cors())

const database= async ()=>{
await mongoose.connect("mongodb+srv://shivkumarloharkar:Tny9dZwuwEYHTE9t@cluster0.efn3se0.mongodb.net/Car_Rent")
console.log("database connected")
}
database()

const port =9999

app.listen(port,()=>{
    console.log(`${port} is runnning`)})

app.get("/",(req,res)=>{
    res.send("hiii")
})

app.use("/vehicle",router)

app.use("/user",UserRouter)

app.use("/vehicleBooking",bookingRouter)