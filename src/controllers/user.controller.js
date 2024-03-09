import User from "../models/User.js";
import jwt from "jsonwebtoken";


//retrieve users 
export const getUsers = async (req, res) => {
    try {        
        const users = await User.find().select('-password');
        res.status(200).json(
            {
                success: true,
                message: "Users retrieved",
                data: users
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Users can't be retrieved",
                error: error.message
            }
        )
    }
}

//retrieve user's profile
export const getUserProfile = async (req, res) => {
    try {
        const userId = req.token.userId
        const user = await User.findOne(
            {
                where: {
                    id: userId
                }
            }
        )
        console.log(userId);

        if (!user) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Your profile doesn't exist",
                }
            )
        }

        return res.status(201).json(
            {
                success: true,
                message: "Your profile is retrieved successfully",
                data: user
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                susscess: false,
                message: "your profile can't be retrieved",
                error: error.message
            }
        )
    }
}