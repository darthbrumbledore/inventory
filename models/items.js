const mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    unique: false
  },
  purchasePrice: {
    type: Number,
    minLength: 1,
    required: false
  },
  salePrice: {
    type: Number,
    minLength: 1,
    required: false
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  photos: {
    type: String,
    minLength: 1
  },
  condition: {
    type: String,
    minLength: 1,
    required: true
  },
  sold: {
    type: Boolean
  },
  category: {
    type: String,
    minLength: 1,
    required: true
  }
});

var Item = mongoose.model('Item', ItemSchema);
module.exports = {Item};
