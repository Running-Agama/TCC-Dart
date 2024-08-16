import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 4, maxLength: 30},
    email: {type: String, required: true, minLength: 4, maxLength: 30, unique: true},
    password: {type: String, required: true, minLength: 4, maxLength: 72},
    state: {type: String, required: true, minLength: 2, maxLength: 2},
    ranking: {type: String, required: true, maxLength: 16},
    postal:{type: String, required: true, length: 8},
    housenumber: {type: String, required: true, minLength: 1, maxLength: 9999}
},
{
    timestamps: true
})

const userModel = mongoose.model("Users", userSchema)

export default userModel