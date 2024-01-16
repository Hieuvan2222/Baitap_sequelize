import express from "express"
import morgan from "morgan"
import rootRoutes from "./src/routes/rootRoutes.js"
// const express = require('express')
const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(rootRoutes)



// import mysql from 'mysql2'
// const conn = mysql.createConnection({
//     host : 'localhost',
//     user :'root',
//     password:'Vanquy1*',
//     port : 3306,
//     database:'node38_food'
// })


// app.get("/likeres",async(req,res)=>{
//     let query = "";
//     try{
//         let data =await conn.promise().query(query)
//         res.send(data[0])
//     }catch(error){
//         res.send(`error ${error}`)
//     }
// })
app.listen("8081", () => {
    console.log("BE starting with port 8081")
})

