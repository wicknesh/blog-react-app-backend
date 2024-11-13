import express from 'express';
const router = express.Router();
import userModel from '../models/userData.js';
import jwt from 'jsonwebtoken';

router.post('/login', async(req, res) => {
    try {
        const user = await userModel.findOne({email:req.body.email})
        if(!user) {
            res.send({message: 'User not found!'});
        }
        else {
            if(user.password == req.body.password){
                const payload = {email: user.email, password: user.password};
                const token = jwt.sign(payload, 'blogApp');
                res.status(200).send({message: 'Login successful', token: token});
            }
            else{
                res.status(400).send('Invalid credentials');
            }
        }
    }
    catch(error) {
        console.log(error);
    }
})

router.post('/signup', async(req, res) => {
    const {name, email, address, phonenumber, password} = req.body;
    try {
        const newUser = new userModel({name, email, address, phonenumber, password});
        await newUser.save();
        res.status(200).json({message: "Signup successful"});
    }
    catch(error) {
        res.status(500).json({error: error.message});
    }
})

export default router;