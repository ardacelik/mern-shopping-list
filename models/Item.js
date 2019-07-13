const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now // gives to current date and time as default
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
