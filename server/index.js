import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/users.js';
import sensorRoute from './routes/sensors.js';
import twilio from 'twilio';

// const express = require('express');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRoute = require('./routes/users.js');
// const sensorRoute = require('./routes/sensors.js');

const app = express();
const Port = process.env.PORT || 8080;


dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log("Database couldn't connect",err);
})


app.use(express.json());
app.use(cors());

app.use("/user",userRoute);
app.use("/sensor",sensorRoute);
app.post("/notify",async (req,res) => {

    const { to, message } = req.body;

    try {
        
        const msgOptions = {
            body: message,
            from: process.env.TWILIO_NUMBER,
            to: to
          }

        const msg = await client.messages.create(msgOptions);
        res.status(200).json(msg);
        // console.log("Message is : ",msg);
    }catch(err) {
        res.status(500).json(err);
    }
})

// app.get("/",(req,res)=>{
//     console.log("Home");
//     res.send("this is home route");
// });

// app.get("/", (req, res) => {
//     res.status(200).send("App is running successfully!");
//   });
  

app.listen(Port,()=>{
    console.log(`Backend server is running on : ${Port}`)
})