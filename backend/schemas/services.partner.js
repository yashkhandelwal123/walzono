const mongoose = require('mongoose');
// const Partner = require('./partner.model');

const servicesProviderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(https?:\/\/)?([a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+)(\/.*)?$/.test(v);
            },
            message: "Invalid URL format."
        }
    },
    partners: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Partner',
    }],
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price : {
        type : Number, 
        required : true
    }
}, { timestamps: true }); 

const ServicesProvider = mongoose.model('ServicesProvider', servicesProviderSchema);

module.exports = ServicesProvider;
