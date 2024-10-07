import express from "express"
export const UserRouter=express.Router()
import { getallusers ,Userregister,Userlogin} from "../controller/User_controller.js"




UserRouter.post("/create", Userregister)

UserRouter.post("/login", Userlogin)

UserRouter.get("/getusers", getallusers)