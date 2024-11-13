import express from 'express'
const router = express.Router();
import blogModel from '../models/blogData.js';
import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    let token = req.headers.token;
    try {
        if(!token) throw 'Unauthorized access';
        let payload = jwt.verify(token, 'blogApp');
        if(!payload) throw 'Unauthorized access';
        next();
    }
    catch (error) {
        console.log(error);
    }

}

router.get('/', async(req, res) => {
    try {
        const data = await blogModel.find();
        res.status(201).send(data);
    }
    catch(error) {
        res.status(500).send({error: error.message});
    }
})

router.post('/addblog', verifyToken, async(req, res) => {
    const {name, image, author, description} = req.body;
    try{
        const newBlog = new blogModel({name, image, author, description});
        await newBlog.save();
        res.status(201).json(newBlog);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
})

router.delete('/delete/:id', verifyToken, async(req, res) => {
    try {
        await blogModel.findByIdAndDelete(req.params.id);
        res.status(200).send(`Data deleted successfully`);
    } catch (error) {
        res.status(404).send(error);
    }
})

router.put('/edit/:id', verifyToken, async(req, res) => {
    try {
        var item = req.body;
        await blogModel.findByIdAndUpdate(req.params.id, item);
        res.status(200).send(`Updated successfully`);
    }
    catch (error) {
        res.status(404).send(error);
    }
})

export default router;