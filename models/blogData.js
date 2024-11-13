import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    name: String,
    image: String,
    author: String,
    description: String
})

export default mongoose.model('blogdata', blogSchema);