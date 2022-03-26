const mongoose = require("mongoose");
const { JunctionTypes, JunctionStatus } = require("./../../variables");
const Schema = mongoose.Schema;

const JunctionSchema = new Schema({
  address: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    trim: true,
    required: true,
    enum: JunctionTypes
  },
  status: {
    type: String,
    trim: true,
    required: true,
    enum: JunctionStatus
  },
  location: {
    type: String,
    trim: true
  },
  descriptionOfLocation: {
    type: String,
    trim: true
  },
  uplinkJunctionId: {
    type: Schema.ObjectId,
    ref: "Junction"
  },
  uplinkInternetCableTypeId: {
    type: Schema.ObjectId,
    ref: "CableType"
  },
  uplinkInternetCableDistance: {
    type: Number
  },
  uplinkElectricCableTypeId: {
    type: Schema.ObjectId,
    ref: "CableType"
  },
  uplinkElectricCableDistance: {
    type: Number
  },
  installationDate: {
    type: Date,
    required: true
  },
  uninstallationDate: {
    type: Date
  },
  dimension: {
    type: String
  },
  keyNo: {
    type: Number
  },
  note: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Junction', JunctionSchema );
