import { Schema, model } from "mongoose"

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: false,
        },
        text: {
            type: String,
            required: true,
        },
        author:
            {
                type: Schema.Types.ObjectId,
                ref: 'User' // Reference to model User
            },
        like:[
            {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: false
            }
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Post = model("Post", PostSchema)

export default Post