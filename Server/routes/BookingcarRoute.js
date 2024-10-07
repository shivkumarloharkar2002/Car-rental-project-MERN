import express from "express"
import { Booking_controller, booking_history } from "../controller/Booking_controller.js"
 const bookingRouter=express.Router()


bookingRouter.post("/Bookcar",Booking_controller)

bookingRouter.get("/carbookinghistory",booking_history)

export default bookingRouter