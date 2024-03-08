export const getUsers = async (req, res) => {
    try {
        
        const users = await User.find().select('title');

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