import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
    personName : String,
    companyName : String,
    email : String,
    phoneNo : Number,
    address :{ streetLines: [String], city : String, state : String, pincode : Number},
    licenses : [String],
    gstNumber : String,
    panNumber : String,
    bankDetails : { bankName : String, accountNumber : Number, ifscCode : String},
    avaliableTimeSlots : [{openTime : time, closeTime : time}],
});


export default mongoose.model("Partner", partnerSchema);