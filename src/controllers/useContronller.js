
// import { getResByIdServices } from "../services/restaurant.services.js";
import { getUserByIdServices ,userLikeServices } from "../services/useServices.js";

const userLike = async (req, res) => {
    try {
        const { user_id, res_id } = req.body;
        const userExist = await getUserByIdServices(user_id);
        if (!userExist) {
            res.status(404).send("User not found!");
        } else {
            const resExist = await getResByIdServices(res_id);
            if (!resExist) {
                res.status(404).send("Restaurant not found!");
            } else {
                const newLike = await userLikeServices(user_id, res_id);
                if (newLike) {
                    res.status(201).send("like successful!")
                } else {
                    res.status(400).send("user liked!");
                }
            }
        }
    } catch (error) {
        res.status(500).send(error);
    }
}
export{
    userLike
}