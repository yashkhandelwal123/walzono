const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
    panNo: {
        type: String,
        required: true,
        unique: true
    },
    panName: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    bankAccountNo: {
        type: String,
        required: true
    },
    ifscCode: {
        type: String,
        required: true
    },
    gstNo: {
        type: String,
        required: true,
        unique: true
    },
    // licenseNo: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    openingTime: {
        type: String,
        required: true
    }, // Format like "09:00 AM"
    closingTime: {
        type: String,
        required: true
    }, // Format like "09:00 PM"
    openingDays: {
        type: [String],
        required: true
    }, // Array of strings, e.g., ["Monday", "Tuesday"]

    partnerId: {
        type: Schema.Types.ObjectId,
        ref: 'Partner', // This links back to the Partner schema
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);