import React, { useState } from 'react';
import { Camera, Upload, Building2, User, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import OTPLogin from './OTPLogin';
import axios from 'axios';
import { PARTNER_API_END_POINT } from '../../utils/constent';
import {toast} from 'react-hot-toast'
import { useNavigate} from 'react-router-dom';
import  {useDispatch}  from 'react-redux';
import { getPartner } from '../../redux/partnerSlice';

const PartnerRegistration= ()=> {
  const [formData, setFormData] = useState({
    parlourName: '',
    personName: '',
    email: '',
    phone: '',
    address: '',
    parlourImage: ""
  });
  const [previewImage, setPreviewImage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        parlourImage: file
      }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${PARTNER_API_END_POINT}/partner-register`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });
      console.log(response.data);

      const dataObj = {
        parlourName: formData.parlourName,
        personName: formData.personName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        parlourImage: formData.parlourImage
      }
      if(response.data.success){
        toast.success(response.data.message)
        console.log("dataObj: ", response.data.partnerInfo)
        dispatch(getPartner(response.data.partnerInfo))  
        navigate('/partner/login')
      }
    } catch (error) {
      toast.error(error.response?.data?.message)
      console.log(error)
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br text-black from-indigo-50 via-purple-50 to-pink-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
            Join Our Partner Network
          </h1>
          <p className="text-gray-600">Become a part of our growing community of successful businesses</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Business Identity Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Business Identity</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-purple-50 to-white rounded-xl border-2 border-dashed border-purple-200">
                <div className="relative w-40 h-40 mb-4">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center shadow-inner border-2 border-purple-100">
                      <Camera className="w-16 h-16 text-purple-300" />
                    </div>
                  )}
                  <label
                    htmlFor="image-upload"
                    className="absolute -bottom-2 -right-2 bg-purple-600 p-3 rounded-xl cursor-pointer hover:bg-purple-700 transition-colors shadow-lg group"
                  >
                    <Upload className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    required
                  />
                </div>
                <p className="text-sm text-purple-600 font-medium">Upload Business Photo</p>
                <p className="text-xs text-gray-500 mt-1">Recommended: 800x800px</p>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-purple-400 group-focus-within:text-purple-600 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="parlourName"
                    value={formData.parlourName}
                    onChange={handleInputChange}
                    placeholder="Business Name"
                    className="pl-12 p-4 w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-purple-500 transition-all"
                    required
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-purple-400 group-focus-within:text-purple-600 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="personName"
                    value={formData.personName}
                    onChange={handleInputChange}
                    placeholder="Contact Person Name"
                    className="pl-12 p-4 w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-purple-500 transition-all"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Contact Details</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-purple-400 group-focus-within:text-purple-600 transition-colors" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="pl-12 p-4 w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-purple-500 transition-all"
                  required
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-purple-400 group-focus-within:text-purple-600 transition-colors" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="pl-12 p-4 w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-purple-500 transition-all"
                  required
                />
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Business Location</h2>
            </div>

            <div className="relative group">
              <div className="absolute top-4 left-4 pointer-events-none">
                <MapPin className="h-5 w-5 text-purple-400 group-focus-within:text-purple-600 transition-colors" />
              </div>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Full Business Address"
                rows={3}
                className="pl-12 p-4 w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-purple-500 transition-all resize-none"
                required
              />
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Complete Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



export default PartnerRegistration;