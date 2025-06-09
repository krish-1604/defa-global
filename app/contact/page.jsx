'use client'
import { useState } from 'react';

export default function Contact({onClose}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    onClose(); // Close the modal via parent
  };

  return (
    <div key="contact-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-[#C1F0FF] rounded-2xl shadow-2xl max-h-[95vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-darkblue hover:text-blue-900 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header - Fixed */}
        <div className="text-center pt-6 pb-4 px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue mb-2">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-darkblue mx-auto"></div>
        </div>

        {/* Form Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-golden font-medium text-sm mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full py-2.5 px-3 bg-[#C1F0FF] border-2 border-darkblue rounded-lg text-darkblue placeholder-darkblue text-sm focus:outline-none focus:ring-2 focus:ring-darkblue focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-golden font-medium text-sm mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full py-2.5 px-3 bg-[#C1F0FF] border-2 border-darkblue rounded-lg text-darkblue placeholder-darkblue text-sm focus:outline-none focus:ring-2 focus:ring-darkblue focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-golden font-medium text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full py-2.5 px-3 bg-[#C1F0FF] border-2 border-darkblue rounded-lg text-darkblue placeholder-darkblue text-sm focus:outline-none focus:ring-2 focus:ring-darkblue focus:border-transparent"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-golden font-medium text-sm mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full py-2.5 px-3 bg-[#C1F0FF] border-2 border-darkblue rounded-lg text-darkblue placeholder-darkblue text-sm focus:outline-none focus:ring-2 focus:ring-darkblue focus:border-transparent"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-golden font-medium text-sm mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="4"
                className="w-full py-2.5 px-3 bg-[#C1F0FF] border-2 border-darkblue rounded-lg text-darkblue placeholder-darkblue text-sm resize-none focus:outline-none focus:ring-2 focus:ring-darkblue focus:border-transparent"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={handleSubmit}
                className="py-3 px-8 bg-darkblue text-golden font-bold text-base rounded-lg hover:bg-blue-900 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}