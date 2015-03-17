var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ItemSchema = new Schema({
  _id: {
    type: String,
    index: true,
    required: true
  },
  name: {
    required: true,
    type: String,
    trim : true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  updatedAt:  {
    type: Date,
    default: Date.now,
    required: true
  }
});

ItemSchema.pre('save', function (next) {
  if (!this.isModified('updatedAt')) {
    this.updatedAt = new Date();
  }
  next();
});

mongoose.model('Item', ItemSchema);

module.exports = ItemSchema;
