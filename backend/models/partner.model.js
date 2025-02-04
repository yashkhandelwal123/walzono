// models/BeautyParlor.js
const beautyParlorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contact: { type: String, required: true },
    servicesOffered: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      coordinates: { type: [Number], index: '2dsphere' }
    },
    availability: {
      workingHours: {
        start: String, // e.g., "09:00"
        end: String    // e.g., "20:00"
      },
      holidays: [Date]
    },
    rating: { type: Number, default: 0 },
    isVerified: { type: Boolean, default: false },
    portfolio: [String], // URLs of service images
    createdAt: { type: Date, default: Date.now }
  });