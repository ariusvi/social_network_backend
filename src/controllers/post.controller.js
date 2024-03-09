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