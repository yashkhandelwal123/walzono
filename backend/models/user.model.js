// models/User.js
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
    profilePic: { type: String, default: 'default-avatar.jpg' },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      coordinates: { type: [Number], index: '2dsphere' } // [longitude, latitude]
    },
    createdAt: { type: Date, default: Date.now }
  });