
import express from "express"
import { res_rou } from "../controllers/resControllers.js"
const resRoutes = express.Router()
resRoutes.get("/res-rou",res_rou)

export default resRoutes