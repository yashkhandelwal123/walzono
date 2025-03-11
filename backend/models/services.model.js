const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  serviceImage: {
    type: String,
    required: true
  }, // URL or path to the image
  partnerId: {
    type: Schema.Types.ObjectId,
    ref: 'Partner', // This links back to the Partner schema
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);