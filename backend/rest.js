import express from 'express';
import bodyParser from 'body-parser';
import {mongoose} from 'mongoose';
import { UserModel } from './user-model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { ProductsService } from '../src/app/_service/products.service.js';

import dotenv from 'dotenv';
dotenv.config();

export const app = express();
app.use(cors());

const password = process.env.password;
const uri = `mongodb+srv://ohsgkd:${password}@cluster0.8y7tslm.mongodb.net/viking`;

mongoose.connect(uri)    
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(() => {
        console.log('Error connecting to MongoDB');
    })

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})

app.post('/auth/signup', (req, res) => {

    bcrypt.hash(req.body.password, 10)
        .then(hash => {

            const user = new UserModel({
                name: req.body.username,
                password: hash,
                email: req.body.email,
            })

            user.save()
                .then(result => {
                    res.status(201).send({
                        message: 'User created',
                        result: result
                    })
                })
                .catch(err => [
                    res.status(500).send({
                        error: err
                    })
                ])
        })
})

app.post('/auth/login', (req,res) => {

    let userFound;

    UserModel.findOne({name: req.body.username})
        .then(user => {
            if(!user){
                return res.status(401).send({
                    message: 'User not found'
                })
            }
            userFound = user
            return bcrypt.compare(req.body.password, user.password)
        })
    .then(result => {
        if(!result){
            return res.status(401).send({
                message: 'Password is incorrect'
            })
        }
        else {

            const token = jwt.sign({username: userFound.name, userId: userFound._id}, "secret_string", {expiresIn:"1h"})
            return res.status(200).send({
                token: token,
                id: userFound._id,
                name: userFound.name
            })
        }
    })
    .catch(err => {
        return res.status(401).send({
            message: 'Error with authentication'
        })
    })
})
  


app.post('/addtocart', (req, res, next) => {
    const id_ = req.body.id;
    const user = req.body.user; // id

    const foundProd = ProductsService.products.find(product => product.id === Number(id_))
    
    UserModel.findByIdAndUpdate(user, {
        $push: {
            cart: foundProd
        }
    }, { new: true })
    .then(() => {
        console.log('cart updated');
        res.status(201).send({
            item: foundProd
        })
    })
    
})

app.get('/getcart', async (req, res) => {
    const user = req.query.user;

    const model = await UserModel.findById(user);

    res.status(200).send({
        cart: model.cart
    })
})


app.get('/getuser', async (req, res) => {
    const user = req.query.id;

    const model = await UserModel.findById(user);

    res.status(200).send({
        user: model
    })
})


app.post('/edituser', async (req, res) => {
    const id = req.body.id;
    const surname = req.body.surname;
    const phone = req.body.phone;
    const address = req.body.address;
    const email = req.body.email;

    if(!surname && !phone && !address && !email){
        res.status(200).send({
            message: 'no action'
        })
        return;
    }


    let updateUserInfo = {}

    if (surname)
        updateUserInfo['surname'] = surname
    if (phone)
        updateUserInfo['phone'] = phone
    if (address)
        updateUserInfo['address'] = address
    if (email)
        updateUserInfo['email'] = email

    const upd = await UserModel.findByIdAndUpdate(id, updateUserInfo,
        { new: true })

    res.status(201).send({
        message: 'updated',
        upd: upd
    })

})

app.post('/removecart', async (req, res) => {
    const itemId = Number(req.body.itemId);
    const userId = req.body.userId;

    await UserModel.findByIdAndUpdate(userId, {
            $pull: {
                cart: { id: itemId } 
            }
        }, { new: true })
    .then(() => console.log('removed from cart'))
    .catch((err) => console.log('err:', err))

    res.status(201).send({
        message: 'removed',
    })
})

//module.exports = app;