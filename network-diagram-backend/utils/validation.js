const mongoose = require('mongoose');

exports.validateObjectId = (value) => {
  return mongoose.Types.ObjectId.isValid(value);
};
