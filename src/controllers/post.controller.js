import Post from "../models/Post.js";

export const createPost = async (req, res) => {
	try {
		const title = req.body.title;
		const text = req.body.text;
		const image = req.body.image;
		const userId = req.tokenData.userId;


		const newPost = await Post.create({
			title: title,
			text: text,
			image: image,
			author: userId //todo que muestre el name, no el id ¿como?
		});

		res.status(201).json({
			success: true,
			message: "New post created succesfully",
			data: newPost,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Can't create new post",
			error: error.message,
		});
	}
};

export const deletePostById = async (req, res) => {
	try {
		const postId = req.params._id
		console.log(postId);
		const findPostId = await Post.findOne({
			_id: postId
		})
		
		if (!findPostId) {
			return res.status(404).json(
				{
					success: false,
					message: "Post not found"
				}
			)
		}

		const postRemoved = await Post.findByIdAndDelete({
			_id: postId
		})
		res.status(200).json(
			{
				success: true,
				message: "Post deleted successfully",
				data: postRemoved
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