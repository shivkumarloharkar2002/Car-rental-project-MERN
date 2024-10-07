import express from "express"
import { DeleteVehicle, getAllcars, updateVehicle, vehicleController } from "../controller/Vehicle_Controller.js"


export const router=express.Router()

//http://localhost:9999/api/addvehicle
router.post("/addvehicle",vehicleController)

router.get("/getallcars",getAllcars)

router.put("/updatevehicle",updateVehicle)

router.delete("/deleteVehicle/:id",DeleteVehicle)

