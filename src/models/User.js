import { Schema, model } from "mongoose"

const UserSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    biography: {
      type: String,
      required: false,
    },
    avatar: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ["user", "admin", "super_admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const User = model("User", UserSchema)

export default User