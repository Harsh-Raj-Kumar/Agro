import express from "express";
import Sensor from "../models/sensor.js";
// const express = require('express');
// const Sensor = require('../models/sensor.js');


const router = express.Router();

router.post("/" , async (req,res) => {
    try {

        
        const sensor_details = new Sensor({
            temperature_in_c : req.body.temperature_in_c,
            moisture : req.body.moisture,
            time : req.body.time
        });

        const newSensorDetails = await sensor_details.save();
        res.status(200).json(newSensorDetails);

    }catch(err) {
        res.status(500).json(err);
    }
});

router.get("/" , async (req,res) => {
    try {

        const sensors = await Sensor.find()
        .sort({ updatedAt: 1 }) // Sort by updatedAt in descending order
        .limit(10); // Limit to 10 documents

        res.status(200).json(sensors);

    }catch(err) {
        res.status(500).json(err);
    }
});

// module.exports = router;

export default router;