import User from "../models/User.js";

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
        const userId = req.tokenData.userId
        const user = await User.findOne({_id: userId}).select('-password') //it doesn't show the password

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

//update user's profile
export const updateUsersProfile = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const name = req.body.name;
        const findUserById = await User.findOne({_id: userId })

        if (!findUserById) {
            return res.status(500).json(
                {
                    success: false,
                    message: "User not found",
                }
            )
        }

        const userUpdated = await User.findOneAndUpdate(
            {
                _id: userId
            },
            {
                name: name
            },
            {
                new: true
            }
        )
        res.status(200).json(
            {
                success: true,
                message: "User's profile updated succesfully",
                data: userUpdated,
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "ERROR",
                error: error.message
            }
        )
    }

}