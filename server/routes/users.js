import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
// const express = require('express');
// const User = require('../models/user.js');
// const bcrypt = require('bcrypt');

const router = express.Router();

router.post("/register" , async (req,res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);


        const user = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword,
        });

        const newUser = await user.save();
        res.status(200).json(newUser);

    }catch(err) {
        res.status(500).json(err);
    }
});

router.post("/login", async (req, res) => {
    try {
        //find user
        const foundUser = await User.findOne({ email: req.body.email });
        // console.log({ foundUser })

        if (foundUser) {
            //if foundUser: compare entered password to stored/foundUser password.
            const validPassword = await bcrypt.compare(
                req.body.password,
                foundUser.password
            );
            if (validPassword) {
                //if both passwords match:
                res.status(200).json({ _id: foundUser._id, username: foundUser.username, email: foundUser.email });
            } else {
                //if both passwords dont match:
                res.status(400).json("invalid credentials");
            }
        } else {
            //if !foundUser:
            res.status(400).json("invalid credentials");
        }

    } catch (error) {
        res.status(500).json({ error, test: 'test' });
    }
});


// module.exports = router;

export default router;