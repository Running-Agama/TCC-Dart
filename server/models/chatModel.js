import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema(
    {
        members: Array,
        status: {type: String, required: true}
    },
    {
        timestamps: true 
    }
)

const chatModel = mongoose.model("Chat", chatSchema)

export default chatModel