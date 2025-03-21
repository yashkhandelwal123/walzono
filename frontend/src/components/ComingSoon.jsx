import React, { useState, useEffect } from 'react';
import { Timer, Mail, ArrowRight, Github, Twitter, Linkedin , Instagram } from 'lucide-react';
import Navbar from './Navbar';
import Preloader from './Preload';


function ComingSoon() {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (

    <>
        {loading ? (
            <Preloader onComplete={() => setLoading(false)} />
        ) :(
            <div className="min-h-screen pt-24 bg-black text-white flex flex-col relative overflow-hidden">
      <Navbar />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('')] bg-repeat"></div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl w-full px-6 z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4 tracking-tight">Coming Soon</h1>
            <p className="text-xl text-gray-400 mb-8">Something amazing is in the works</p>
            
            {/* Countdown Timer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-4xl font-bold mb-1">{value}</div>
                  <div className="text-sm text-gray-400 capitalize">{unit}</div>
                </div>
              ))}
            </div>

            {/* Email Signup */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mb-12">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/20 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                Notify Me
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com/walzono_official" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center p-6 text-gray-500 z-10">
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
        )}
    
    </>

    
  );
}

export default ComingSoon;