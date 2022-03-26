const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CableTypeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('CableType', CableTypeSchema );
