import express from "express"
import useRoutes from "./useRoutes.js"
import resRoutes from "./resRoutes.js"
const rootRoutes = express.Router()
rootRoutes.use("/userRou", useRoutes)
rootRoutes.use("/resRoutes",resRoutes)


export default rootRoutes 
