// import mongoose from "mongoose";
// import partnerModel from "../schemas/partner.model";
const partnerModel = require('../schemas/partner.model');

exports.registerPartner = async (req, res) => {
    const { 
        personName, 
        companyName, 
        email, 
        phoneNo, 
        address, 
        gstNumber, 
        panNumber, 
        bankAccountDetails,
        licenses,
        avaliableTimeSlots 
    } = req.body;

    console.log(req.body);

    // Check for required fields
    if (!personName || !companyName || !email || !phoneNo || !address || !gstNumber || !panNumber || !licenses || !avaliableTimeSlots) {
        return res.status(400).json({
            success: false,
            message: "All fields are required: personName, companyName, email, phoneNo, address, gstNumber, panNumber, bankAccountDetails, licenses, avaliableTimeSlots."
        });
    }

    // Validate phone number length
    if (phoneNo.length !== 10 || !/^\d{10}$/.test(phoneNo)) {
        return res.status(400).json({
            success: false,
            message: "Phone number must be exactly 10 digits."
        });
    }

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email format."
        });
    }

    // Check if the partner already exists based on GST and PAN
    try {
        const partnerExisted = await partnerModel.findOne({ gstNumber, panNumber });
        if (partnerExisted) {
            return res.status(400).json({
                success: false,
                message: "Partner already exists. Please log in."
            });
        }

        // Create a new partner
        const partnerDetails = await partnerModel.create({
            personName,
            companyName,
            email,
            phoneNo,
            address,
            gstNumber,
            panNumber,
            bankDetails: bankAccountDetails,  // Ensure this is passed correctly
            licenses,                         // Ensure this is passed correctly
            avaliableTimeSlots
        });

        if (!partnerDetails) {
            return res.status(500).json({
                success: false,
                message: "Error while registering partner."
            });
        }

        // Success response
        res.status(201).json({
            success: true,
            message: "Partner registered successfully.",
            partner: partnerDetails
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error.",
            error: error.message
        });
    }
};





const getAllpartners = async (req, res) => {
    try {
        const partners = await partnerModel.find();
        res.status(200).json(partners);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getPartners = async (req, res) => {
    const filters = req.query; // Extract query parameters

    try {
        const query = {};

        if (filters.rating) {
            query.rating = filters.rating;
        }

        if (filters.city) {
            query.city = filters.city; 
        }

        const partners = await partnerModel.find(query);

        res.status(200).json(partners);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// export { registerPartner, getAllpartners, getPartners };



