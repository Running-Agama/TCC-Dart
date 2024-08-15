import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 4, maxLength: 30},
    email: {type: String, required: true, minLength: 4, maxLength: 30},
    password: {type: String, required: true, minLength: 4, maxLength: 30},
    auth: {type: String, required: true, maxLength: 30}
})

const adminModel = mongoose.model("admins", adminSchema)

export default adminModel