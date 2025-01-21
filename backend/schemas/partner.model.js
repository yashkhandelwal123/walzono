const mongoose = require('mongoose');
// const servicesProviderModel = require('./services.partner');

const partnerSchema = new mongoose.Schema({
    personName: {
        type: String,
        required: true,
        trim: true,
    },
    companyName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Invalid email format.",
        },
    },
    phoneNo: {
        type: String, // Changed to String to handle leading zeros
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: "Phone number must be 10 digits.",
        },
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    licenses: {
        type: [String],
        default: [],
    },
    gstNumber: {
        type: String,
        required: true,
        unique: true,
    },
    panNumber: {
        type: String,
        required: true,
        unique: true,
    },
    bankDetails: {
        bankName: {
            type: String,
            // required: true,
        },
        accountNumber: {
            type: String, // Changed to String to avoid issues with very large numbers
            // required: true,
        },
        ifscCode: {
            type: String,
            // required: true,
        },
    },
    avaliableTimeSlots: [
        {
            openTime: {
                type: String, // Use "HH:mm" format for time as a string
                required: true,
            },
            closeTime: {
                type: String, // Use "HH:mm" format for time as a string
                required: true,
            },
        },
    ],
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServicesProvider',
    }],
}, { timestamps: true });

module.exports = mongoose.model("Partner", partnerSchema);
