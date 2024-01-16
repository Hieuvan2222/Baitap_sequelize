import { Sequelize, sequelize } from "sequelize";
const sequelize = new Sequelize("node38_food","root","Vanquy1*",{
    host:"localhost",
    port: 3306 ,
    dialect : "mysql"
});


export default sequelize;
