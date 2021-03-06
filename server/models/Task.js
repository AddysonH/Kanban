import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Comment = new Schema({
    description: { type: String, required: true },
    creatorEmail: { type: String, required: true }
})

const Task = new Schema({
    description: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    listId: { type: ObjectId, ref: 'List', required: true },
    comments: [Comment]
}, { timestamps: true, toJSON: { virtuals: true } })

Task.virtual("creator",
    {
        localField: "creatorEmail",
        ref: "Profile",
        foreignField: "email",
        justOne: true
    })

Comment.virtual("creator", {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true
})
export default Task