import mongoose from "mongoose";
import partnerModel from "../schemas/partner.model";

const registerPartner = async (req, res) => {
    const partnerDetails = req.body;

    try {
        const partner = new partnerModel(partnerDetails);
        await partner.save();
        res.status(201).json(partner);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}