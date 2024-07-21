import mongoose from "mongoose";
// const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   username : {
     type : String,
     require : true,
     min: 3,
     max: 20,
     unique : true,
   },
   email : {
    type : String,
    require : true,
    unique : true,
  },
  password : {
    type : String,
    require : true,
  },
},
  {timestamps: true}
);


const User = mongoose.model("user",UserSchema);

// module.exports = User;

// export default mongoose.model("user", UserSchema);

export default User;