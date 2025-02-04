// models/Booking.js
const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    parlor: { type: mongoose.Schema.Types.ObjectId, ref: 'BeautyParlor', required: true },
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    bookingDate: { type: Date, required: true },
    timeSlot: { type: String, required: true }, // e.g., "15:00-16:00"
    status: { 
      type: String, 
      enum: ['pending', 'confirmed', 'completed', 'cancelled'], 
      default: 'pending' 
    },
    price: { type: Number, required: true },
    paymentStatus: { type: Boolean, default: false },
    cancellationReason: String,
    createdAt: { type: Date, default: Date.now }
  });