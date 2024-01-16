// import { sequelize } from "../models/connect.js";

import { sequelize } from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getUserByIdServices = async (user_id) => {
    if (!user_id) return false;
    const user = await conn.users.findOne({
        where: {
            user_id
        }
    });
    if (user) {
        return user;
    } else {
        return false;
    }
}

export{

    getUserByIdServices
}