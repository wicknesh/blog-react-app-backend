import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phonenumber: String,
    password: String,
})

export default mongoose.model('userdata', userSchema)