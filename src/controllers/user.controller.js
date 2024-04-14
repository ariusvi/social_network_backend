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
                message: "Profile can't be retrieved",
                error: error.message
            }
        )
    }
}

//update user's profile
export const updateUsersProfile = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const nickname = req.body.nickname;
        const avatar = req.body.avatar;
        const biography = req.body.biography;
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
                nickname: nickname
            },
            {
                avatar: avatar
            },
            {
                biography: biography
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
                message: "User's profile can't be updated",
                error: error.message
            }
        )
    }

}

//delete user
export const deleteUserById = async (req, res) => {
    try {
        const userId = req.params._id
        const findUserId = await User.findOne({
            _id: userId
        }).select('-password')

        if (!findUserId) {
            return res.status(404).json(
                {
                    success: false,
                    message: "User not found"
                }
            )
        }

        const userRemoved = await User.findByIdAndDelete({
            _id: userId
        }).select('-password')

        res.status(200).json(
            {
                success: true,
                message: "User deleted successfully",
                data: userRemoved
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "User can't be deleted",
                error: error.message
            }
        )
    }
}