const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/local");

connect.then(() => {
  console.log("database connected successfully");
})
.catch(() => {
  console.log('database cannot be connected');
});
const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type:String,
    required:true
  }
});
const collection = new mongoose.model("local", LoginSchema);
module.exports = collection;
