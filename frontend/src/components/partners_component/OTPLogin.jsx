import React, { useState } from 'react';
import { Mail, KeyRound, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PARTNER_API_END_POINT } from '../../utils/constent';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router';
import {useDispatch} from 'react-redux';
import { getPartner } from '../../redux/partnerSlice';
import { Link } from 'react-router-dom';


function OTPLogin() {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call to send OTP
    try {
        const response = await axios.post(`${PARTNER_API_END_POINT}/partnerLoginOTP`, {email},{
            headers : {
                'Content-Type' : 'application/json'
            },
            withCredentials: true
        });
        if(response.data.success){
            toast.success(response.data.message);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsLoading(false);
            setStep('otp');
            dispatch(getPartner(response.data?.partnerInfo));
            return;
        }else{
            console.log(response.data.message);
            setIsLoading(false);
            toast.error(response.data.message);
            return;
        }
        
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
        setIsLoading(false);
        return;
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call to verify OTP
    try {
      const response = await axios.post(`${PARTNER_API_END_POINT}/PartnerLoginOTPVerify`, {email, OTP: otp.join('')}, {
        headers:{
          'Content-Type' : 'application/json'
        },
        withCredentials : true
      })
      // console.log("here", response)
      if(response.data.success){
        toast.success(response.data.message)
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setStep('success');
        dispatch(getPartner(response.data.partnerInfo));
        return;
      }
      else{
        console.log(response.data.message)
        setIsLoading(false);
        toast.error(response.data.message)
        return;
      }
      
    } catch (error) {
      console.log(error.response)
      toast.error(error.response.data.message)
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    // Simulate API call to resend OTP
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br text-black from-purple-50 via-indigo-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        {step === 'email' && (
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.01]">
            <div className="text-center mb-8">
              <div className="mx-auto h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Partner Login</h2>
              <p className="mt-2 text-sm text-gray-600">Enter your email to receive a verification code</p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all bg-gray-50 focus:bg-white"
                    placeholder="Enter your email"
                  />
                  <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
              <Link to={'/partner/register'} className='flex justify-center text-sm text-blue-600 text-bold hover:text-blue-900 items-center transition-colors '>Don't have an account? Register</Link>
            </form>
          </div>
        )}

        {step === 'otp' && (
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.01]">
            <div className="text-center mb-8">
              <div className="mx-auto h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                <KeyRound className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Enter Verification Code</h2>
              <p className="mt-2 text-sm text-gray-600">
                We've sent a verification code to<br />
                <span className="font-medium text-purple-600">{email}</span>
              </p>
            </div>

            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div className="flex justify-center space-x-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-12 h-12 text-center text-2xl font-semibold rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all bg-gray-50 focus:bg-white"
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={isLoading || otp.some(digit => !digit)}
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                ) : (
                  'Verify Code'
                )}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={isLoading}
                  className="text-sm text-purple-600 hover:text-purple-500 font-medium focus:outline-none"
                >
                  Didn't receive the code? Resend
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.01] text-center">
            <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Successfully Verified!</h2>
            <p className="text-gray-600 mb-8">You have successfully verified your email address.</p>
            <button
              // onClick={() => window.location.reload()}
              onClick={() => Navigate('/partner/dashboard')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition-all duration-200 hover:scale-[1.02]"
            >
              Continue to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OTPLogin;