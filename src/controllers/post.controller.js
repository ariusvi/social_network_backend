import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => { //todo que muestre el name, no el id del autor ¿como?
    try {
        const title = req.body.title;
        const text = req.body.text;
        const image = req.body.image;
        const userId = req.tokenData.userId;


        const newPost = await Post.create({
            title: title,
            text: text,
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


export const updatePost = async (req, res) => {
    try {
        const postId = req.params._id
        const title = req.body.title
        const text = req.body.text
        const findPostId = await Post.findOne({ _id: postId })

        if (!findPostId) {
            return res.status(404).json(
                {
                    success: false,
                    message: "Post not found"
                }
            )
        }

        const postUpdated = await Post.findByIdAndUpdate(
            {
                _id: postId
            },
            {
                title: title,
                text: text,
                // new: true
            },
            {
                new: true
            }
        )
        res.status(200).json(
            {
                success: true,
                message: "Post updated succesfully",
                data: postUpdated,
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


export const getPost = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(
            {
                success: true,
                message: "Posts retrieved",
                data: post
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Posts can't be retrieved",
                error: error.message
            }
        )
    }
}


export const getPostById = async (req, res) => {
    try {

        const postId = req.params._id
        const findPostId = await Post.findOne({ _id: postId })

        if (!findPostId) {
            return res.status(404).json(
                {
                    success: false,
                    message: "Post not found"
                }
            )
        }

        const post = await Post.findOne({ _id: postId });
        res.status(200).json(
            {
                success: true,
                message: "Post retrieved",
                data: post
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Post can't be retrieved",
                error: error.message
            }
        )
    }
}


export const getOwnPost = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const user = await User.findOne({ _id: userId })

        if (!user) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Your profile doesn't exist",
                }
            )
        }

        const getOwn = await Post.find({ author: userId });
        res.status(200).json(
            {
                success: true,
                message: "Posts retrieved",
                data: getOwn
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


export const getPostByUserId = async (req, res) => { //the route of this controller is at user.routes.js
    try {
        const userId = req.params.userId
        const getPostUser = await Post.find({ author: userId })

        res.status(200).json(
            {
                success: true,
                message: "Posts retrieved",
                data: getPostUser
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


export const likePost = async (req, res) => {
    try {
        const userId = req.tokenData.userId;
        const postId = req.params._id;
        const post = await Post.findOne({ _id: postId });

        if (!post) {
            return res.status(404).json(
                {
                    success: false,
                    message: "Post not found"
                }
            )
        }

        const hasLike = post.like.includes(userId);
        if (hasLike) {                    //check if post has like
            post.like.pull(userId)       //take like off
        } else {
            post.like.push(userId)      //like post
        }
        await post.save()

        res.status(200).json(
            {
                success: true,
                message: hasLike ? "Post unliked successfully" : "Post liked successfully",
                data: post
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