
import sequelize from "../models/connect.js"
import initModel from "../models/init-models.js"

//initModel => user , customer,order ,...
const conn = initModel(sequelize)

const res_rou = async (res_id)=>{
    try{
        let data = await conn.restaurant.findOne({
            where: {res_id}      })
        res.send(data)
    }catch(error){
        console.log(`BE error : ${error}`)

    }
    
}
export{
    res_rou
}