// models/Service.js
const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true, enum: ['Makeup', 'Haircut', 'Facial', 'Massage'] },
    description: String,
    duration: { type: Number, required: true }, // in minutes
    price: { type: Number, required: true },
    category: { type: String, enum: ['men', 'women', 'unisex'] },
    parlor: { type: mongoose.Schema.Types.ObjectId, ref: 'BeautyParlor', required: true }
  });