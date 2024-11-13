import mongoose from 'mongoose'; 
import 'dotenv/config';

const options = {
    dbName: 'blogApp'
};

const mongo_url = process.env.mongodb_url;

const connectDB = () => {
    mongoose.connect(mongo_url, options)
        .then(() => console.log('DB is connected'))
        .catch((error) => console.log(error));
}

export default connectDB;