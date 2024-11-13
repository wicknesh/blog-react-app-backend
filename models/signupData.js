import mongoose from 'mongoose';

const signupSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phonenumber: String,
    password: String
})

export default mongoose.model('userdata', signupSchema);