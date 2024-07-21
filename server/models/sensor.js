import mongoose from "mongoose";
// const mongoose = require('mongoose');

const SensorSchema = new mongoose.Schema({

  temperature_in_c: {
    type: Number,
    require: true,
  },
  moisture: {
    type: Number,
    require: true,
  },
  time: {
    type: String,
    require: true,
  }
},
  { timestamps: true }
);

const Sensor = mongoose.model("sensor", SensorSchema);

// module.exports = Sensor;

// export default mongoose.model("user", UserSchema);

export default Sensor;