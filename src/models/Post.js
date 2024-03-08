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
        image: { //the user can post an URL of an image
            type: URL, //todo probar si funciona, sino, cambiar a tipo string
            required: false,
        },
        author: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User' // Reference to model User
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Post = model("Post", PostSchema)

export default Post