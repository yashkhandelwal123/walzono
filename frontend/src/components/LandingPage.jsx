import { useState } from 'react';
import { Scissors, BookOpen, Sparkles, Phone, UserCircle } from 'lucide-react';
import Preloader from './Preload';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);


  return (
    <>
        {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Scissors className="h-8 w-8 text-white mr-2" strokeWidth={2} />
              <span className="text-xl font-bold">BeautyAtHome</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-gray-300">Services</a>
              <a href="#how-it-works" className="hover:text-gray-300">How It Works</a>
              <a href="#about" className="hover:text-gray-300">About Us</a>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black py-4">
            <a href="#services" className="block px-4 py-2 hover:bg-gray-800">Services</a>
            <a href="#how-it-works" className="block px-4 py-2 hover:bg-gray-800">How It Works</a>
            <a href="#about" className="block px-4 py-2 hover:bg-gray-800">About Us</a>
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-800">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-black to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Beauty Services at Your Doorstep
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Book expert beauty treatments in the comfort of your home
          </p>
          <button onClick={() => window.location.href = '/'} className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300">
            Book Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <UserCircle className="h-16 w-16 mx-auto mb-4 text-gray-900" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-2">Certified Professionals</h3>
            <p className="text-gray-600">Experienced and verified beauty experts</p>
          </div>
          
          <div className="text-center p-6">
            <BookOpen className="h-16 w-16 mx-auto mb-4 text-gray-900" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
            <p className="text-gray-600">Book your appointment in 3 simple steps</p>
          </div>

          <div className="text-center p-6">
            <Sparkles className="h-16 w-16 mx-auto mb-4 text-gray-900" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Hygienic products and equipment</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-16 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['Select Service', 'Pick Time Slot', 'Expert Arrives', 'Enjoy Service'].map((step, index) => (
              <div key={step} className="text-center">
                <div className="h-16 w-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Facial Treatments', 'Hair Styling', 'Waxing', 'Manicure/Pedicure', 'Bridal Makeup', 'Massage Therapy']
              .map(service => (
                <div key={service} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{service}</h3>
                  <p className="text-gray-600">Professional {service.toLowerCase()} services at your home</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BeautyAtHome</h3>
            <p className="text-gray-400">Bringing beauty services to your doorstep</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400"><Phone className="h-5 w-5 inline-block mr-2" strokeWidth={1.5} /> +1 234 567 890</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            {/* Add social media links here */}
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            {/* Add legal links here */}
          </div>
        </div>
      </footer>
        </div>
        
      )}
    </>
  );
}